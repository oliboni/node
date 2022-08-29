import express from "express";
import BookController from "../controllers/booksController.js"

const router = express.Router();

router
    .get("/books", BookController.getBooks)
    .get("/books/find", BookController.getBookByPublishingCompany)
    .get("/books/:id", BookController.getBooksById)
    .post("/books", BookController.createBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook)

export default router;