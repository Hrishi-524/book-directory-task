// models/Book.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            trim: true,
        },
        isbn: {
            type: String,
            unique: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
