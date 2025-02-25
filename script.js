// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Language toggle (basic)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const currentLang = langToggle.textContent === '中文' ? 'English' : '中文';
    langToggle.textContent = currentLang;
    // Add full bilingual logic here if desired
});

// Lightbox for gallery
function openLightbox(img) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span onclick="this.parentElement.remove()">X</span>`;
    document.body.appendChild(lightbox);
}