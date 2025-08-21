import Book from "../models/Book";

export const listAllBooks = async (req, res) => {
    let books = await Book.find({})
    res.status(200).json(books)
}

export const getBook = async (req, res) => {
    let { id } = req.params
    let book = await Book.findById(id)
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book) 
}

export const updateBook = async (req, res) => {
    let { id } = req.params
    let updatedData = req.body
    const upadtedBook = Book.findByIdAndUpdate(id, updatedData, {new: true, runValidators : true})
    res.status(201).json(upadtedBook)
}

export const deleteBook = async (req, res) => {
    let { id } = req.params
    const deletedBook = await findByIdAndDelete(id)
    if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(204).json(deletedBook) 
}

export const createBook = async (req, res) => {
    let {title, author, year, genre, isbn} = req.body
    const newBook = new Book({
        title : title,
        author : author,
        year : year,
        genre : genre,
        isbn : isbn
    })
    newBook.save()
    res.status(201).json(newBook)
}