function filterPapers() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value;
    const papers = document.querySelectorAll('#paperList li');

    papers.forEach(paper => {
        const title = paper.querySelector('strong').innerText.toLowerCase();
        const category = paper.getAttribute('data-category');

        if ((title.includes(searchBar) || searchBar === '') && (category === filterCategory || filterCategory === '')) {
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