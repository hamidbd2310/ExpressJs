const express = require('express');
const router= require('./src/routes/api.js');
const app =new express();


app.use('/', router);

module.exports = app;