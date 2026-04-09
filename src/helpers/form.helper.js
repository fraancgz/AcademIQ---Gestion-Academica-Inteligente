
const formHelpers = {
    getFormAction: (id, ruta) => {
        return id ? `/${ruta}/${id}/edit` : `/${ruta}/create`
    },
    getFormName: (id) => {
        return id ? 'Editar Curso' : 'Crear Curso'
    },
    isSelected: (idCategory, idCourseCategory) => {
        return idCategory == idCourseCategory ? 'selected' : '';
    },
    isMedia: (level) => {
        if (!level) return false;

        // Convierto a minisculas
        const normalizedLevel = level.toLowerCase();

        // Retorna true si level contiene medio o media
        return normalizedLevel.includes('media') || normalizedLevel.includes('medio');
    }
}

export default formHelpers