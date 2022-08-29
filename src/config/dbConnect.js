import mongoose from "mongoose"


mongoose.connect("mongodb+srv://admin:admin@cluster0.arq5p3f.mongodb.net/node");

let db = mongoose.connection

export default db;