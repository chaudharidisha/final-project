import mongoose from "mongoose";

 export const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
    category : String,
    price : Number,
    quantity : Number,
    description : String,
    publishedYear : Number
})

const Book = mongoose.model("Book",bookSchema);

export default Book;