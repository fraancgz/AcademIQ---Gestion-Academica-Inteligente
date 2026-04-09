// models/CourseSubject.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const CourseSubject = sequelize.define('CourseSubject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Este es el campo "estrella" que hablamos para las variantes de Ciencias
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El nombre display es obligatorio" },
            notEmpty: { msg: "El nombre no puede estar vacío" }
        }
    }
}, {
    tableName: "course_subjects",
    timestamps: false
});

export default CourseSubject;