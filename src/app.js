const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);

const indexRoute = require("./routes/index");
const todoRoute = require("./routes/todo");

app.use("/", indexRoute);
app.use("/todo", todoRoute);

module.exports = app;
