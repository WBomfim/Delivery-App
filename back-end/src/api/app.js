require('express-async-errors');
const express = require('express');
const handleErros = require('../middlewares/handleErrors');
const loginRoutes = require('../routes/login');
const registerRoutes = require('../routes/register');
const productsRoutes = require('../routes/products');

const app = express();

app.use(express.json());

app.get('/coffeee', (_req, res) => res.status(418).end());

app.use('/login', loginRoutes);

app.use('/register', registerRoutes);

app.use('/products', productsRoutes);

app.use(handleErros);

module.exports = app;