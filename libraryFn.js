function Book(title, author) {
        this.title = title
        this.author = author
}

Book.prototype.toString = function(){
    return JSON.stringify(this.title)
}

Book.prototype.isTheSameBook = function(book){
    if(book instanceof this.constructor){
        for(let key in book){
            if(book[key] !== this[key]){
                return false
            }
        }
        return true
    }
    return false
}


function LibraryBookBase(title, author, bookId) {
        Book.call(this, title, author)
        this.bookId = bookId
}

LibraryBookBase.prototype = Object.create(Book.prototype)

LibraryBookBase.prototype.toString = function(){
    return JSON.stringify(this.author)
}

function LibraryBook(title, author, bookId, quantity) {
    LibraryBookBase.call(this, title, author, bookId)
    this.quantity = quantity
}

LibraryBook.prototype = Object.create(LibraryBookBase.prototype)

LibraryBook.prototype.toString = function(){
    return JSON.stringify(this.title)
}

LibraryBook.prototype.increaseQuantityBy = function(amount){
    this.quantity = this.quantity + amount
} 

LibraryBook.prototype.decreaseQuantityBy = function(amount){
    if(amount <= this.quantity){
        this.quantity = this.quantity - amount
    } else {
        alert('Amount exceeded quantity')
    }
}


function ReaderBook(title, author, bookId, expirationDate, isReturned){
    LibraryBookBase.call(this, title, author, bookId)
        this.expirationDate = expirationDate
        this.isReturned = isReturned
}

ReaderBook.prototype = Object.create(LibraryBookBase.prototype)

ReaderBook.prototype.toString = function(){
    return JSON.stringify(this.expirationDate)
}


function Reader(firstName, lastName, readerId, books) {
        this.firstName = firstName
        this.lastName = lastName
        this.readerId = readerId
        this.books = books
}

Reader.prototype.toString = function(){
    return JSON.stringify(this.books)
}

Reader.prototype.borrowBook = function(book, library){
    if(book instanceof ReaderBook){
        if(library.doHaveBook(book)){
            this.books.push(book)
        }
    }
}

function Library(books, readers) {
        this.books = books
        this.readers = readers
}

Library.prototype.doHaveBook = function(requestedBook){
    if(requestedBook instanceof Book){
        for(let key in this.books){
            if(this.books[key].isTheSameBook(requestedBook)) {
                return true
            }
        }
        return false
    }
    return false
}

Library.prototype.addBook = function(newBook){
    if(!this.doHaveBook(newBook)){
        this.books.push(newBook)
    } else {
        newBook.increaseQuantityBy(1)
    }
}

Library.prototype.addBooks = function(newBooks){
    newBooks.forEach(e => this.addBook(e))
    return this.books
}

Library.prototype.checkReaderId = function(readerId){
    for(let key in this.readers){
        if(this.readers[key].readerId === readerId){
            return true
        }
    }
    return false
}
Library.prototype.lendBook = function(book, readerId){
    if(this.doHaveBook(book) && book.quantity >= 1){
        if(this.checkReaderId(readerId)){
            return new ReaderBook(book.title, book.author, book.bookId, JSON.stringify(new Date()), false)
        }
    }
}


let book1 = new Book('HP', 'JKR')
let book2 = new Book('Divine Comedy', 'Dante')

let bookBase1 = new LibraryBookBase('Faust', 'Goethe', 1)
let bookBase2 = new LibraryBookBase('Faust 2', 'Goethe', 11)

let newLibBook1 = new LibraryBook('Mother', 'Gorky', 3, 10)
let newLibBook2 = new LibraryBook('My Truth', 'Gandhi', 4, 5)

let readerBook1 = new ReaderBook('War and Peace', 'Tolstoy', 5, 'Aug1', true)
let readerBook2 = new ReaderBook('Crime and Punishment', 'Dostoevsky ', 6, 'Sep12', false)

let readerBook3 = new ReaderBook('War and Peace 2', 'Tolstoy', 15, 'Aug12', true)
let readerBook4 = new ReaderBook('Crime and Punishment 2', 'Dostoevsky ', 16, 'Sep22', false)

let reader1 = new Reader('Hasmik', 'Margaryan', 7, [readerBook1])
let reader2 = new Reader('John', 'Smith', 8, [readerBook1, readerBook2])

let lib2 = new Library([newLibBook1, readerBook2], [reader1, reader2])