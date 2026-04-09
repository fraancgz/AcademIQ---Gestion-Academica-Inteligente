
document.addEventListener('DOMContentLoaded', () => {
    // Lógica global para cerrar alertas
    const alertEl = document.querySelector('.js-auto-close');

    if (alertEl) {
        // Esperamos los 5 segundos de rigor
        setTimeout(() => {
            // Agregamos la clase que hace toda la magia del CSS
            alertEl.classList.add('alert-hidden');

            // Opcional: Eliminarlo del DOM después de que termine la animación
            setTimeout(() => {
                alertEl.remove();
            }, 500); // 500ms coincide con el tiempo de la transición CSS
        }, 5000);
    }
});