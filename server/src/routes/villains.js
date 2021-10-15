const express = require("express");
const { Router } = express;

const villainsRouter = Router();
const villainsData = require("../data/villains.json");

villainsRouter.get("/", (req, res) => {
  res.json({
    message: "This is the /villains route",
  });
});

villainsRouter.get("/all", (req, res) => {
  res.json(villainsData);
});

villainsRouter.get("/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const villain = villainsData.filter((villain) => villain.id === id)[0];
  if (villain) {
    res.json(villain);
  } else {
    res.status(404).json({ error: `No villain found with id = ${id}` });
  }
});

module.exports = villainsRouter;
