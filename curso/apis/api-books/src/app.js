const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routers/bookRoutes');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/*
GET http://localhost:8080/api/books

POST http://localhost:8080/api/books
Content-Type: application/json

{
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
}

PUT http://localhost:8080/api/books/1
Content-Type: application/json

{
    "year": 1610
}

DELETE http://localhost:8080/api/books/1
*/