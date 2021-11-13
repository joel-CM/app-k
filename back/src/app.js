const express = require("express");
const morgan = require("morgan");
const app = express();
// rutas
const routeClients = require("./routes/clients.route");

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routs
app.use("/clients", routeClients);

module.exports = app;
