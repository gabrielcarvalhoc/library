let tbody = document.querySelector('#books-table');

let myLibrary = [
    {
        title: 'test',
        author: 'test2',
        pages: 'test3',
        read: true
    },
    {
        title: 'test4',
        author: 'test5',
        pages: 'test6',
        read: true
    },
    {
        title: 'test7',
        author: 'test8',
        pages: 'test9',
        read: true
    },
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function addBooktoLibrary() {
//     let title = prompt('Title');
//     let author = prompt('Author');
//     let pages = prompt('Pages');
//     let read = prompt('Read');

//     const book = new Book(title, author, pages, read);
    
//     myLibrary.push(book);
// }

function displayBook() {
    
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

// addBooktoLibrary();

displayBook();