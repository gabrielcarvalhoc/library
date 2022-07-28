let tbody = document.querySelector('#books-table');
let formNewBook = document.querySelector('#form-new-book');
let table = document.querySelector('#table');

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
        read = 'Yes';
    } else {
        read = 'No';
    }

    const book = new Book(title, author, pages, read);
   
    myLibrary.push(book);
}

function displayBooks() {
    tbody.textContent = '';

    myLibrary.forEach((book, index) => {
        let tr = document.createElement('tr');
        tbody.append(tr);
        
        for (let prop in book) {
            let td = document.createElement('td');
            tr.append(td);
            td.append(book[prop]);
        }

        if (book.read == 'Yes') {
            tr.classList.add('read-book');
        } else if (book.read == 'No') {
            tr.classList.add('no-read-book');
        }
        
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let readButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        readButton.textContent = 'Change';
        readButton.classList.add('read-button');
        readButton.setAttribute('data-index', index);
        readButton.setAttribute('onclick', 'toggleRead(this)');

        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', index);
        deleteButton.setAttribute('onclick', 'deleteBook(this)');

        tr.append(td1);
        td1.append(readButton);
        tr.append(td2);
        td2.append(deleteButton);
    })
}

formNewBook.addEventListener('submit', (e) => {
    e.preventDefault();
    addBooktoLibrary();
    displayBooks();
})

function toggleRead(e) {
    let dataIndex = e.getAttribute('data-index');
    
    if (myLibrary[dataIndex].read == 'No') {
        myLibrary[dataIndex].read = 'Yes';
    } else {
        myLibrary[dataIndex].read = 'No';
    }

    displayBooks();
}

function deleteBook(e) {
    let dataIndex = e.getAttribute('data-index');

    myLibrary.splice(dataIndex, 1);

    displayBooks();
}