const form = document.getElementById('book-form');
const tableBody = document.querySelector('#book-table tbody');
const genreFilter = document.getElementById('filter-genre');

let books = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const genre = document.getElementById('genre').value;

    if(title && author && genre) {
        const book = {title, author, genre};
        books.push(book);
        updateTable();
        form.reset();
    }
});

tableBody.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        const index = row.rowIndex - 1;
        books.splice(index, 1);
        updateTable();
    }
});

genreFilter.addEventListener('change', updateTable);

function updateTable() {
    const selectedGenre = genreFilter.value;
    tableBody.innerHTML = '';
    
    books.forEach((book, index) => {
        if (selectedGenre == 'All' || book.genre == selectedGenre) {
            const row = document.createElement('tr');

            row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td><button class="delete-btn">Delete</button></td>
            `;