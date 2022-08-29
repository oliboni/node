import { response } from "express"
import books from "../models/Book.js"

class BookController {
    static getBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }
    
    static getBooksById = (req, res) => {
        const id = req.params.id
        
        books.findById(id, (err, books) => {
            if(err){
                res.status(400).send({message: `Book not found - ${err.message}`})
            }

            res.status(200).send(books)
        })
    }
    
    static createBook = (req, res) => {
        let book = new books(req.body)
        
        book.save((err) => {
            if (err) {
                res.status(500).send({message:`Error on save book - ${err.message}`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }
    
    static updateBook = (req, res) => {
        const id = req.params.id;
        
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } 
            
            res.status(200).send({message: 'Book update successfuly'})
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message}`})
            }

            res.status(200).send({message: "Delete book successfuly"})
        })
    }
}

export default BookController