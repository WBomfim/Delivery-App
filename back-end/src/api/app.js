const express = require('express');
require('express-async-errors');

const app = express();

app.get('/coffeee', (_req, res) => res.status(418).end());

module.exports = app;
