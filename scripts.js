document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Deja de observar después de la animación
            }
        });
    }, { 
        threshold: 0.1, // Activa cuando el 10% de la sección es visible
        rootMargin: '0px 0px -50px 0px' // Ajusta el margen para detectar secciones antes de que entren completamente
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Muestra u oculta el botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Aparece después de 300px de scroll
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Vuelve al inicio cuando se hace clic en el botón
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});