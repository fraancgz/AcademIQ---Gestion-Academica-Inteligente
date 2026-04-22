const menuBtn = document.getElementById('userMenuBtn');
const dropdown = document.getElementById('userDropdown');

if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        // Si el clic NO es el dropdown Y NO es el botón (ni nada dentro de él)
        if (!dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}