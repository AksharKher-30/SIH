// Smooth scroll functionality
document.querySelector('.scroll-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector('#how-it-works');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});