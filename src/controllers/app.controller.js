import { appStatus } from '../config/index.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

/**
* Controlador básico para la ruta raíz.
* Envía una respuesta de texto plano para confirmar que el servidor está en línea.
*/
const getHomeView = (req, res) => {

    // Capturamos el valor de la URL
    const errorType = req.query.error
    let message = null

    // Mensaje será nulo, a menos que ocurra un error
    if (errorType === 'session_expired') message = "Tu sesión ha expirado. Por favor, ingresa de nuevo."


    return res.render('access', {
        layout: 'access-layout',
        pageTitle: 'Acceso',
        appName: 'AcademIQ',
        ok: !message, // Si no hay mensaje es true, si hay mensaje es false
        message
    })
}

/**
* Controlador para la ruta de estado.
* Proporciona datos técnicos y el estado del servidor en tiempo real.
*/
const getStatus = (req, res) => {

    const uptimeSeconds = Math.round(process.uptime());

    // Respondo con código 200 y un objeto JSON estructurado
    return res.status(200).json({
        status: 'ok',
        data: {
            // Spread operator: inyecto las propiedades estáticas
            ...appStatus,

            // Agrego los datos dinámicos del servidor
            // Lógica para manejar el singular/plural el tiempo de actividad
            uptime: `${uptimeSeconds} ${uptimeSeconds === 1 ? 'second' : 'seconds'}`,
            // Fecha y hora actual del servidor (formato local)
            server_time: new Date().toLocaleString(),
            // Identificador único del proceso en el Sistema Operativo
            pid: process.pid // Process ID
        }
    })
}

const userLogin = async (req, res) => {
    // Con el middleware express.json(), los datos están en req.body
    const email = req.body.mail?.trim().toLowerCase();
    const pass = req.body.pass?.trim();

    if (!email || !pass) return res.status(400).json({
        ok: false,
        message: "Por favor, ingresa correo y contraseña"
    })

    try {
        const user = await User.findOne({ where: { email } })

        if (!user) return res.status(200).json({
            ok: false,
            message: "El usuario no existe"
        })

        // Comparación con Bcrypt
        // Comparo la 'pass' plana con 'user.password' (el hash de la DB)
        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            return res.status(200).json({
                ok: false,
                message: "Credenciales incorrectas"
            });
        }

        req.session.userId = user.id;
        req.session.userName = user.username;

        // Solo mando datos no sensibles
        return res.status(200).json({
            ok: true,
            message: "Bienvenido a AcademIQ",
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            redirectUrl: "/activities"
        });

    } catch (error) {
        console.error(error.message)
        return res.status(500).json({
            ok: false,
            message: "Error de conexión con el servidor"
        })
    }

}

const userRegister = async (req, res) => {

    const email = req.body.mail?.trim().toLowerCase();
    const pass = req.body.pass?.trim();
    const username = req.body.username?.trim().toLowerCase();

    if (!email || !pass || !username) return res.status(400).json({
        ok: false,
        message: "Por favor, ingresa correo, contraseña y nombre de usuario"
    })

    try {
        const user = await User.findOne({ where: { email } })

        if (user) return res.status(200).json({
            ok: false,
            message: "El usuario ya existe"
        })

        const salt = bcrypt.genSaltSync(10)
        const hashedPass = bcrypt.hashSync(pass, salt)

        const newUser = await User.create({
            username,
            email,
            password: hashedPass
        })

        if (!newUser) return res.status(200).json({
            ok: false,
            message: "Error al crear el usuario"
        })

        return res.status(200).json({
            ok: true,
            message: "Usuario creado con éxito",
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email
            },
            redirectUrl: "/"
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).json({
            ok: false,
            message: "Error de conexión con el servidor"
        })
    }

}

export { getHomeView, getStatus, userLogin, userRegister }



