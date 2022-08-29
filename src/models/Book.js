import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        publishing_company: {type: String, required: true},
        pages: {type: Number}
    }
);

const books = mongoose.model("books", bookSchema);

export default books;