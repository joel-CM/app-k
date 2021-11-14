const express = require("express");
const morgan = require("morgan");
const app = express();
// rutas
const routeClients = require("./routes/clients.route");

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routs -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
app.use("/api/clients", routeClients);

module.exports = app;
