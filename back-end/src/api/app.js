require('express-async-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const handleErros = require('../middlewares/handleErrors');
const loginRoutes = require('../routes/login');
const userRoutes = require('../routes/users');
const productsRoutes = require('../routes/products');
const salesRoutes = require('../routes/sales');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/login', loginRoutes);

app.use('/users', userRoutes);

app.use('/products', productsRoutes);

app.use('/sales', salesRoutes);

app.use('/images', express.static(path.resolve(__dirname, 'images', 'public')));

app.get('/coffeee', (_req, res) => res.status(418).end());

app.use(handleErros);

module.exports = app;
