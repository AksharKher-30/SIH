function filterPatents() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value.toLowerCase();
    const patents = document.querySelectorAll('#patentList li');

    patents.forEach(patent => {
        const title = patent.querySelector('strong').textContent.toLowerCase();
        const category = patent.getAttribute('data-category').toLowerCase();
        const patentText = patent.textContent.toLowerCase();

        const matchesSearch = patentText.includes(searchInput);
        const matchesCategory = category.includes(filterCategory) || filterCategory === '';

        if (matchesSearch && matchesCategory) {
            patent.style.display = '';
        } else {
            patent.style.display = 'none';
        }
    });
}
