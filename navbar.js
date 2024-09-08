// Optional: Add any interactivity you want here
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.textContent + ' clicked');
    });
});
