const express = require("express");
const route = express.Router();
// model client
const { Client } = require("../../db");

// get all client -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.get("/", async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

// get one client -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.get("/:id", async (req, res) => {
  const { id } = req.params;

  !Number.isInteger(parseInt(id)) &&
    res.status(500).json({ message: "params not valid!" });

  try {
    const searchClient = await Client.findByPk(id);
    if (searchClient) {
      res.status(200).json(searchClient);
    } else {
      res.status(404).json({ message: "client not found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

// create a new client -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.post("/", async (req, res) => {
  const { name } = req.body;
  await Client.create({ name });
  res.json({ message: "client created!" });
});

// update client -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
route.put("/", async (req, res) => {
  const { newName, oldName } = req.body;

  try {
    const searchClient = await Client.findOne({ where: { name: oldName } });
    if (searchClient) {
      await Client.update(
        { name: newName },
        {
          where: {
            name: oldName,
          },
        }
      );
      return res.status(200).json({ message: "client updated!" });
    } else {
      return res.status(404).json({ message: "client not found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
