import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Profile = db.define('Profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Nombre es obligatorio" },
            is: {
                args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/i,
                msg: "El nombre solo puede contener letras, tildes y espacios"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Apellido es obligatorio" }
        }
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Sin esepecialidad (mención)', // O "Por definir"
        validate: {
            len: { args: [3, 50], msg: "La especialidad debe tener entre 3 y 50 caracteres" }
        }
    },
    maxWeeklyHours: {
        type: DataTypes.INTEGER,
        defaultValue: 44, // Jornada laboral estándar
        validate: { min: 1, max: 80 }
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'profiles',
    timestamps: true
});

export default Profile;