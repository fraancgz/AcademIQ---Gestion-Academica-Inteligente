import { Course } from '../models/index.js'

const getCoursesView = async (req, res) => {
    // Obtengo el ID del profesor desde la sesión
    const teacherId = req.user.id

    // Busco solo los cursos que le pertenecen a este ID
    const courses = await Course.findAll({
        where: { userId: teacherId },
        raw: true
    }) || []

    return res.render('course', {
        pageTitle: 'Cursos',
        isCourse: true,
        courses
    })
}

const getCourseForm = async (req, res) => {

    const { id } = req.params

    // Dibujo el courseForm para CREAR. Mando un curso vacío
    if (!id) return res.render('courseForm', {
        pageTitle: 'Cursos',
        isCourse: true,
        course: {}
    })

    try {
        const course = await Course.findOne({
            where: { id },
            raw: true
        }) || {}

        // Dibujo el courseForm para CREAR. Mando el curso obtenido por el ID
        return res.render('courseForm', {
            pageTitle: 'Cursos',
            isCourse: true,
            course,
            isEdit: true
        })
    } catch (error) {
        return res.redirect('/courses')
    }
}

const createCourse = async (req, res) => {
    const level = req.body.level?.trim().toLowerCase()
    const letter = req.body.letter?.trim().toUpperCase()
    const { id } = req.params // Viene del router /:id/edit o vacío

    console.log(req.user)
    const teacherId = req.user.id
    const course = { level, letter, id } // Incluimos el id para el helper getFormName


    if (!teacherId) {
        return res.redirect('/auth?error=session_expired')
    }

    // 2. Validación de campos
    if (!level || !letter) {
        return res.status(400).render('courseForm', {
            pageTitle: 'Cursos',
            isCourse: true,
            isEdit: !!id, // Booleano para el H1
            course,
            message: "Por favor, ingresa nivel y letra del curso"
        })
    }

    try {
        if (!id) {
            // --- MODO CREAR ---
            await Course.create({
                level,
                letter,
                userId: teacherId
            })
        } else {
            // --- MODO EDITAR ---
            const [rowsUpdated] = await Course.update(
                { level, letter },
                { where: { id, userId: teacherId } } // Filtro de seguridad
            )

            if (rowsUpdated === 0) {
                return res.status(404).render('courseForm', {
                    pageTitle: 'Cursos',
                    isCourse: true,
                    isEdit: true,
                    course,
                    message: "No se encontró el curso o no tienes permiso"
                })
            }
        }

        return res.redirect('/courses')

    } catch (error) {
        console.error("Error en createCourse:", error.message)

        // Control de duplicados seguro
        const isUniqueError = error.name === 'SequelizeUniqueConstraintError' || 
                             error.parent?.constraint === 'courses_level_letter_user_id'

        if (isUniqueError) {
            return res.status(400).render('courseForm', {
                pageTitle: 'Cursos',
                isCourse: true,
                isEdit: !!id,
                course,
                ok: false,
                message: `${level.toUpperCase()} "${letter}" ya existe en tus registros`
            })
        }

        return res.status(500).render('courseForm', {
            pageTitle: 'Cursos',
            isCourse: true,
            isEdit: !!id,
            course,
            message: "Error de conexión con el servidor"
        })
    }
}

const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).render({
        pageTitle: 'Cursos',
        isCourse: true,
        error: true,
        message: "El curso no existe"
    })

    const result = await Course.destroy({ where: { id } })

    if (result === 0) return res.status(400).json({
        pageTitle: 'Cursos',
        isCourse: true,
        error: true,
        message: "El curso no existe o ya fué eliminado"
    })

    return res.redirect('/courses')
}

export { getCoursesView, getCourseForm, createCourse, deleteCourse } 