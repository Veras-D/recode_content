const books = [
    { id: 1, title: "Dom Quixote", author: "Miguel de Cervantes", year: 1605 },
    { id: 2, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", year: 1954 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 4, title: "1984", author: "George Orwell", year: 1949 },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { id: 8, title: "To the Lighthouse", author: "William Wordsworth", year: 1695 },
    { id: 9, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
    { id: 10, title: "The Night Circus", author: "Franz Kafka", year: 1905 },
    { id: 11, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884 },
    { id: 12, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
    { id: 13, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884 },
    { id: 14, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
    { id: 15, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884 },
    { id: 16, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
    { id: 17, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884 },
    { id: 18, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
    { id: 19, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884 },
    { id: 20, title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 },
];


const getAllBooks = () => books;

const getBookById = (id) => books.find((book) => book.id === id);

const addBook = (newBook) => {
    books.push(newBook);
    return newBook;
};

const updateBook = (id, updateData) => {
    const index = books.findIndex((book) => book.id === id);

    if (index !== -1) {
        books[index] = { ...books[index], ...updateData };
        return books[index];
    }

    return null;
};

const deleteBook = (id) => {
    const index = books.findIndex((book) => book.id === id);
    
    if (index !== -1) {
        return books.splice(index, 1)[0];
    }

    return null;
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
};