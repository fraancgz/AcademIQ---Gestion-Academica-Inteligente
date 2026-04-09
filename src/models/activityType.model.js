import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const ActivityType = db.define('ActivityType', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            notNull: { msg: "El tipo es obligatorio" },
            notEmpty: { msg: "El nombre no puede estar vacío" }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "activity_types",
    timestamps: false // No solemos necesitar timestamps para tablas maestras simples
});

export default ActivityType;