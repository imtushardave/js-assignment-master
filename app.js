const express = require('express');
const helper = require("./src/lib/helper");
const errorHandler = require('./src/utils/errorHandler')
const app = express();

app.use(express.json());

//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

// set error handler
app.use(errorHandler);

module.exports = app;