const express = require("express");
const route = express.Router();

// <----------model product---------->
const { Product } = require("../../db");

// <----------routs---------->

// get all product -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.get("/", async (req, res) => {
  let products = await Product.findAll();
  res.json(products);
});

// get one product -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.get("/:id", async (req, res) => {
  const { id } = req.params;

  !Number.isInteger(parseInt(id)) &&
    res.status(500).json({ message: "params not valid!" });

  try {
    const searchProduct = await Product.findByPk(id);
    if (searchProduct) {
      res.status(200).json(searchProduct);
    } else {
      res.status(404).json({ message: "product not found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

// create a new product -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.post("/", async (req, res) => {
  const { name, price } = req.body;
  await Product.create({ name, price });
  res.json({ message: `product ${name} at ${price} created!` });
});

// update product -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.put("/:id", async (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;

  try {
    const searchProduct = await Client.findByPk(id);
    if (searchProduct) {
      await Client.update({ name, price }, { where: { id } });
      return res.status(200).json({
        message: `product ${searchClient.name}: ${searchClient.price} 
        updated to ${name}: ${price}!`,
      });
    } else {
      return res.status(404).json({ message: "product not found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
