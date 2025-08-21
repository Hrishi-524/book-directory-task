import express from "express"
const router = express.Router({ mergeParams: true })
import { wrapAsync } from "../utils/wrapAsync.js";
import { listAllBooks, getBook, updateBook, deleteBook, createBook } from "../controllers/book.js";

// GET : list all books in database
router.route('/')
.get(wrapAsync(listAllBooks))

router.route('/book/:id')
// GET : get an individual book by id
.get(wrapAsync(getBook))
// POST : update an individual book by id
.put(wrapAsync(updateBook))
// DELETE : delete an individual book by id
.delete(wrapAsync(deleteBook))

// POST : create a new book
router.route('/new')
.post(wrapAsync(createBook))
