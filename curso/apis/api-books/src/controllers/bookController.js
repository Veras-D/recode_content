const bookModel = require('../models/bookModel');

const getBooks = (req, res) => {
    const books = bookModel.getAllBooks();
    res.json(books);
};

const getBookById = (req, res) => {
    const { id } = req.params;
    const book = bookModel.getBookById(Number(id));
    
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

const createBook = (req, res) => {
    const { title, author, year} = req.body;
    const books = bookModel.getAllBooks();
    const newId = books.length > 1 ? books[books.length - 1].id + 1 : 1;

    const newBook = { 
        id: newId,
        title,
        author,
        year 
    };

    const createdBook = bookModel.addBook(newBook);

    if (createdBook) {
        res.json(newBook);
    } else {
        res.status(400).json({ message: 'Error, unable to create book.' });
    }
};


const updateBook = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const updatedBook = bookModel.updateBook(Number(id), updateData);

    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const deletedBook = bookModel.deleteBook(Number(id));

    if (deletedBook) {
        res.json(deletedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};