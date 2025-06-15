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
