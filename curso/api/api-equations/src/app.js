const express = require('express');
const bodyParser = require('body-parser');
const equationRoutes = require('./routers/equationRoutes');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/equations', equationRoutes);

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
})
