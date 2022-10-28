const express = require('express');
require('express-async-errors');
const loginRoutes = require('../routes/login');

const app = express();

app.use(express.json());

app.get('/coffeee', (_req, res) => res.status(418).end());

app.use('/login', loginRoutes);

module.exports = app;
