const express = require("express");
const { Router } = express;

const herosRouter = Router();
const herosData = require("../data/heros.json");

herosRouter.get("/", (req, res) => {
  res.json({
    message: "This is the /heros route",
  });
});

herosRouter.get("/all", (req, res) => {
  res.json(herosData);
});

herosRouter.get("/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const hero = herosData.filter((hero) => hero.id === id)[0];
  if (hero) {
    res.json(hero);
  } else {
    res.status(404).json({ error: `No hero found with id = ${id}` });
  }
});

module.exports = herosRouter;
