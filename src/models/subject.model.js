import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // El nombre oficial del MINEDUC (ej: "Ciencias Naturales")
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Para no repetir materias en el catálogo
        validate: {
            notNull: { msg: "El nombre de la asignatura es obligatorio" },
            notEmpty: { msg: "El nombre no puede estar vacío" }
        }
    },
    // Para clasificar (Humanista, Científica, etc.)
    area: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "subjects",
    timestamps: false
});

export default Subject;