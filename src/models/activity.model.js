import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Activity = db.define('Activity', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El título no puede estar vacío" },
            notEmpty: { msg: "El título no puede estar vacío" }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: { msg: "La descripción no puede estar vacía" },
            notEmpty: { msg: "La descripción no puede estar vacía" }
        }
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: "La fecha de entrega es obligatoria" },
            isDate: { msg: "Debe ser una fecha válida" }
        }
    },
    lvl: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: "El nivel (lvl) no puede estar vacío" },
            isNumeric: { msg: "El nivel debe ser un número válido" },
            min: { args: [1], msg: "El nivel mínimo es 1" },
            max: { args: [5], msg: "El nivel máximo es 5" }
        }
    },
    difficultyLabel: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    // NUEVO: El estado de la actividad
    status: {
        type: DataTypes.ENUM('pendiente', 'en_proceso', 'completada', 'standby'),
        defaultValue: 'pendiente',
        allowNull: false,
        validate: {
            isIn: {
                args: [['pendiente', 'en_proceso', 'completada', 'standby']],
                msg: "El estado debe ser: pendiente, en_proceso, completada o standby"
            }
        }
    }
}, {
    tableName: "activities",
    timestamps: true
});

export default Activity;