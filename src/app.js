import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => {
    console.log('DB connection successfully')
})

const app = express();

app.use(express.json())

routes(app)

app.get('/books/:id', (req, res) => {
    res.json(books[getBook(req.params.id)])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('Book saviing with success')
})

app.put('/books/:id', (req, res) => {
    let index = getBook(req.params.id)
    books[index].title = req.body.title
    
    res.json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params
    let index = getBook(id)
    
    books.splice(index, 1)
    res.send(`The book ${id} has been successfully removed`)
})

function getBook(id) {
    return books.findIndex(book => book.id == id)
}

export default app