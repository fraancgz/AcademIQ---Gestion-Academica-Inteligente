import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Course = db.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Ej: "1° Básico", "2do Medio"
    level: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El nivel es obligatorio" },
            notEmpty: { msg: "El nivel no puede estar vacío" }
        }
    },
    // Ej: "A", "B", "C"
    letter: {
        type: DataTypes.STRING(1), // Solo una letra
        allowNull: false,
        defaultValue: 'A', // <-- Si no hay más paralelos, por defecto es el A
        validate: {
            notNull: { msg: "La letra del curso es obligatoria" },
            notEmpty: { msg: "La letra no puede estar vacía" },
            len: { args: [1, 1], msg: "La letra debe tener solo un carácter" }
        }
    },
    // Campo virtual o calculado para mostrar "1° Básico A"
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.level} ${this.letter}`;
        }
    }
}, {
    tableName: "courses",
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['level', 'letter', 'userId'] // Estos tres juntos no pueden repetirse
        }
    ]
});

export default Course;