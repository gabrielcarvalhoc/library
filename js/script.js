let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary() {
    let title = prompt('Title');
    let author = prompt('Author');
    let pages = prompt('Pages');
    let read = prompt('Read');

    const book = new Book(title, author, pages, read);
    
    myLibrary.push(book);
}

addBooktoLibrary();