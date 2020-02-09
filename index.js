function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  books.map(book => {
    let h2 = document.createElement('h2')
    h2.innerText = book.name
    document.body.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
