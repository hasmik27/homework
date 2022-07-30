class Book {
    constructor(title, author){
        this._title = title
        this._author = author
    }

    get title(){
        return this._title
    }
    get author(){
        return this._author
    }

    toString(){
        return JSON.stringify(this.title)
    }

    isTheSameBook(book){
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
}


class LibraryBookBase extends Book {
    constructor(title, author, bookId){
        super(title, author)
        this._bookId = bookId
    }

    get bookId(){
        return this._bookId
    }

    toString(){
        return JSON.stringify(this.author)
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity){
        super(title, author, bookId)
        this.quantity = quantity
    }

    get quantity(){
        return this._quantity
    }

    set quantity(value){
        this._quantity = value
    }

    // հարց 1 - երբ getter-ի անունով եմ դնում setter-ը, տվյալ մակարդակում getter-ը կորումա
    set titleSet(value){
        this._title = value
    }
    
    set authorSet(value){
        this._author = value
    }
    
    set bookIdSet(value){
        this._bookId = value
    }

    toString(){
        return JSON.stringify(this._title)
    }

    increaseQuantityBy(amount){
        this.quantity = this.quantity + amount
    } 

    decreaseQuantityBy(amount){
        if(amount <= this.quantity){
            this.quantity = this.quantity - amount
        } else {
            alert('Amount exceeded quantity')
        }
    }
}

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookId, expirationDate, isReturned){
        super(title, author, bookId)
        this.expirationDate = expirationDate
        this.isReturned = isReturned
    }

    get expirationDate(){
        return this._expirationDate
    }

    set expirationDate(value){
        this._expirationDate = value
    }

    get isReturned(){
        return this._isReturned
    }

    set isReturned(value){
        this._isReturned = value
    }

    // հարց 2 - այս հատվածը կրկնվում ա
    set titleSet(value){
        this._title = value
    }
    
    set authorSet(value){
        this._author = value
    }
    
    set bookIdSet(value){
        this._bookId = value
    }

    toString(){
        return JSON.stringify(this.expirationDate)
    }
}

class Reader {
    constructor(firstName, lastName, readerId, books){
        this.firstName = firstName
        this.lastName = lastName
        this.readerId = readerId
        this.books = books
    }

    get firstName(){
        return this._firstName
    }

    set firstName(value){
        this._firstName = value
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this._lastName = value
    }

    get readerId(){
        return this._readerId
    }

    set readerId(value){
        this._readerId = value
    }

    get books(){
        return this._books
    }

    set books(value){
        this._books = value
    }

    toString(){
        return JSON.stringify(this.books)
    }

    borrowBook(book, library){
        if(book instanceof ReaderBook){
            if(library.doHaveBook(book)){
                this.books.push(book)
            }
        }
    }
}


class Library {
    constructor(books, readers){
        this._books = books
        this._readers = readers
    }

    get books(){
        return this._books
    }

    get readers(){
        return this._readers
    }

    doHaveBook(requestedBook){
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

    // հարց 3 - եթե տրվի instance, որը ստեղծվել է հենց Book-ից, ձեռքով պետք ա տալ
    // bookId-ն ու quantity = 1 ? 

    addBook(newBook){
        if(!this.doHaveBook(newBook)){
            this._books.push(newBook)
            // this._books.push(new LibraryBook(newBook.title, newBook.author, 1, 1))
        } else {
            newBook.increaseQuantityBy(1)
        }
    }

    addBooks(newBooks){
        newBooks.forEach(e => this.addBook(e))
        return this.books
    }

    checkReaderId(readerId){
        for(let key in this.readers){
            if(this.readers[key]._readerId === readerId){
                return true
            }
        }
        return false
    }

    lendBook(book, readerId){
        if(this.doHaveBook(book) && book.quantity >= 1){
            if(this.checkReaderId(readerId)){
                return new ReaderBook(book.title, book.author, book.bookId, JSON.stringify(new Date()), false)
            }
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