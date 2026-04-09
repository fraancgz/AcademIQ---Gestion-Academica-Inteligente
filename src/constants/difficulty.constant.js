import e from "express";

export const DIFFICULTY_LEVELS = {
    1: {
        id: 1,
        name: "Mínimo",
        description: "Se prepara en el recreo; revisión casi nula o automática.",
        color: "#28a745", // Verde (Success)
        cssClass: "lvl-min"
    },
    2: {
        id: 2,
        name: "Bajo",
        description: "Requiere una hora de diseño; corrección simple.",
        color: "#8bc34a", // Verde Lima
        cssClass: "lvl-low"
    },
    3: {
        id: 3,
        name: "Moderado",
        description: "Tarde de diseño + un par de días de corrección.",
        color: "#ffc107", // Amarillo (Warning)
        cssClass: "lvl-mid"
    },
    4: {
        id: 4,
        name: "Alto",
        description: "Fin de semana ocupado + carga administrativa pesada.",
        color: "#fd7e14", // Naranja
        cssClass: "lvl-high"
    },
    5: {
        id: 5,
        name: "Crítico",
        description: "Agotamiento total; requiere rúbricas y feedback intenso.",
        color: "#dc3545", // Rojo (Danger)
        cssClass: "lvl-crit"
    }
};

// Transforma a un arreglo
export const getLevelsList = () => Object.values(DIFFICULTY_LEVELS);
