const express = require("express");
const morgan = require("morgan");
const app = express();
// <----------impport routs---------->
const routeClients = require("./routes/clients.route");
const routeProducts = require("./routes/product.route");

// <----------middlewares---------->
app.use(express.json());
app.use(morgan("dev"));

// routs -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
app.use("/api/clients", routeClients);
app.use("/api/products", routeProducts);

module.exports = app;
