function filterPapers() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value.toLowerCase();
    const papers = document.querySelectorAll('#paperList li');

    papers.forEach(paper => {
        const title = paper.querySelector('strong').textContent.toLowerCase();
        const category = paper.getAttribute('data-category').toLowerCase();
        const paperText = paper.textContent.toLowerCase();

        const matchesSearch = paperText.includes(searchInput);
        const matchesCategory = category.includes(filterCategory) || filterCategory === '';

        if (matchesSearch && matchesCategory) {
            paper.style.display = '';
        } else {
            paper.style.display = 'none';
        }
    });
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
