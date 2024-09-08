// Handling dropdown for Products and Solutions
document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdown) {
                content.style.display = 'none';
            }
        });
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Showing and hiding solutions content
document.querySelector('.navbar-dropdown .dropdown-btn').addEventListener('click', function () {
    const solutionsContent = document.querySelector('.solutions-content');
    solutionsContent.style.display = solutionsContent.style.display === 'block' ? 'none' : 'block';
});

// Hide solutions content if clicked outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar-dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => content.style.display = 'none');
        document.querySelector('.solutions-content').style.display = 'none';
    }
});
