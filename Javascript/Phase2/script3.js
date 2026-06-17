let arr = [];

function addBooks(id, title, author, borrowed = false) {
    let obj = {
        id,
        title,
        author,
        borrowed
    };

    arr.push(obj);
}

function borrowBook(id) {
    let book = arr.find(book => book.id === id);

    if (book) {
        book.borrowed = true;
    }
}

function returnBook(id) {
    let book = arr.find(book => book.id === id);

    if (book) {
        book.borrowed = false;
    }
}

function availableBook() {
    arr.filter(book => !book.borrowed)
       .forEach(book => console.log(book));
}