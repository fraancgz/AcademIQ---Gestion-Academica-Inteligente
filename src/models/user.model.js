import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "Debe ingresar un correo válido" },
            notEmpty: { msg: "Correo es obligatorio" }

        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100] // Mínimo 6 caracteres
        }
    },
    role: {
        type: DataTypes.ENUM('admin', 'teacher'),
        defaultValue: 'teacher', // Por defecto todos son profes
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    tableName: 'users',
    timestamps: true // Crea automaticamente createdAt y updatedAt
})

export default User
