// 1. IMPORTACIÓN DE MODELOS
import User from './user.model.js'
import Profile from './profile.model.js'
import Course from './course.model.js'
import Subject from './subject.model.js'
import CourseSubject from './courseSubject.model.js'
import Activity from './activity.model.js'
import ActivityType from './activityType.model.js'

// --- 2. RELACIONES DE USUARIO (Identidad y Perfil) ---

// Relación 1 a 1: Un usuario tiene un único perfil
User.hasOne(Profile, { foreignKey: { name: 'userId', allowNull: false } })
Profile.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false } })


// --- 3. RELACIONES DE ESTRUCTURA ESCOLAR (Cursos y Asignaturas) ---
// Relación 1 a N: Un profesor (User) gestiona muchos cursos
User.hasMany(Course, { foreignKey: { name: 'userId', allowNull: false } })
Course.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false } })

// Relación N a M: La "Malla Curricular" (Cursos y sus materias)
// Usamos CourseSubject como tabla intermedia para manejar el displayName
Course.belongsToMany(Subject, { 
    through: CourseSubject, 
    foreignKey: 'courseId' 
})
Subject.belongsToMany(Course, { 
    through: CourseSubject, 
    foreignKey: 'subjectId' 
})


// --- 4. RELACIONES DE OPERACIÓN (Actividades y Calificaciones) ---
// Relación 1 a N: Un curso tiene muchas actividades (tareas/exámenes)
Course.hasMany(Activity, { foreignKey: { name: 'courseId', allowNull: false } })
Activity.belongsTo(Course, { foreignKey: { name: 'courseId', allowNull: false } })

// Relación 1 a N: Una actividad tiene un tipo específico (Quiz, Control, etc.)
ActivityType.hasMany(Activity, { foreignKey: { name: 'typeId', allowNull: false } })
Activity.belongsTo(ActivityType, { foreignKey: { name: 'typeId', allowNull: false } })


// 5. EXPORTACIÓN CENTRALIZADA
export {User, Profile, Course, Subject, CourseSubject, Activity, ActivityType
}