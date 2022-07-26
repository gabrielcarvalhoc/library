let tbody = document.querySelector('#books-table');
let buttonNewBook = document.querySelector('#button-new-book');
let formNewBook = document.querySelector('#form-new-book');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    if (read) {
        read = 'yes';
    } else {
        read = 'no';
    }

    const book = new Book(title, author, pages, read);
    
    myLibrary.push(book);
}

function displayBooks() {
    tbody.textContent = '';

    myLibrary.forEach((book) => {
        let tr = document.createElement('tr');
        tbody.append(tr);
        
        for (let prop in book) {
            let td = document.createElement('td');
            tr.append(td);
            td.append(book[prop]);
        }
    })
}

buttonNewBook.addEventListener('click', () => {
    formNewBook.style.display = 'flex';
})

formNewBook.addEventListener('submit', (e) => {
    e.preventDefault();
    addBooktoLibrary();
    displayBooks();
})