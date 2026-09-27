import express from "express";
import { articoli } from "../articoli.js";

const postsRouter = express.Router();

//index
postsRouter.get("/", (req, res) => {
  res.json(articoli);
});

//show
postsRouter.get("/:id", (req, res) => {
  //res.send("Articolo con id: " + req.params.id);
  res.json(articoli.find(articolo => articolo.id === req.params.id));
});

//store
postsRouter.post("/", (req, res) => {
  res.send("Creazione nuovo articolo");
});

//Update
postsRouter.put("/:id", (req, res) => {
  res.send("Modificato (POST) articolo con id: " + req.params.id);
});

//Modify
postsRouter.patch("/:id", (req, res) => {
  res.send("Modificato (PATCH) articolo con id: " + req.params.id);
});

//Destroy
postsRouter.delete("/:id", (req, res) => {
  res.send("Eliminato articolo con id: " + req.params.id);
});

export { postsRouter };
