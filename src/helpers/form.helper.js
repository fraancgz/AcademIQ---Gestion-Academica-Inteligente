
const formHelpers = {
    getFormAction: (id, ruta) => {
        return id ? `/${ruta}/${id}/edit` : `/${ruta}/create`
    },
    getFormName: (id) => {
        return id ? 'Editar Curso' : 'Crear Curso'
    },
    isSelected: (idCategory, idCourseCategory) => {
        return idCategory == idCourseCategory ? 'selected' : ''
    },
    isMedia: (level) => {
        if (!level) return false

        // Convierto a minisculas
        const normalizedLevel = level.toLowerCase()

        // Retorna true si level contiene medio o media
        return normalizedLevel.includes('media') || normalizedLevel.includes('medio')
    },

    // === Helpers de Perfil / Interfaz ===
    /**
    * Extrae una porción de texto y la convierte a mayúsculas.
    * Ideal para generar iniciales de Avatar.
    */
    getInitials: function (firstName, lastName) {
        if (!firstName || !lastName) return 'NN';

        const firstInitial = firstName.charAt(0).toUpperCase();
        const lastInitial = lastName.charAt(0).toUpperCase();

        return firstInitial + lastInitial;
    }
}

export default formHelpers