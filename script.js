window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('show');
        }
    });
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-pt], [data-en]');
    elements.forEach((element) => {
        if (lang === 'pt') {
            element.innerText = element.getAttribute('data-pt');
        } else if (lang === 'en') {
            element.innerText = element.getAttribute('data-en');
        }
    });
}

// Inicializa o idioma padrão como português
changeLanguage('pt');
