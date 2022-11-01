require('express-async-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const handleErros = require('../middlewares/handleErrors');
const loginRoutes = require('../routes/login');
// const registerRoutes = require('../routes/register');
const productsRoutes = require('../routes/products');
const userRoutes = require('../routes/user');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/coffeee', (_req, res) => res.status(418).end());

app.use('/login', loginRoutes);

app.use('/users', userRoutes);

app.use('/products', productsRoutes);

app.use('/images', express.static(path.resolve(__dirname, 'images', 'public')));

app.use(handleErros);

module.exports = app;
