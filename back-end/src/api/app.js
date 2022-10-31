require('express-async-errors');
const express = require('express');
const cors = require('cors');
const handleErros = require('../middlewares/handleErrors');
const loginRoutes = require('../routes/login');
const registerRoutes = require('../routes/register');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/coffeee', (_req, res) => res.status(418).end());

app.use('/login', loginRoutes);

app.use('/register', registerRoutes);

app.use(handleErros);

module.exports = app;
