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