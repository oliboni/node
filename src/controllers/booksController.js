import books from "../models/Book.js"

class BookController {
    static getBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }
    
    static createBook = (req, res) => {
        let book = new books(req.body)
        
        book.save((err) => {
            if (err) {
                res.status(500).send({message:`Error on save book - ${err.message}`})
            } else {
                res.status(201).send(book.toJSON)
            }
        })
    }
}

export default BookController 