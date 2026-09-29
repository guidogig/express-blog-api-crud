import { articoli } from "../articoli.js";

//index
export const index = (req, res) => {
  let filteredArticoli = articoli;

  if (req.query.tag) {
    filteredArticoli = articoli.filter(articolo => {
      return articolo.tags.includes(req.query.tag);
    });
  }

  res.json(filteredArticoli);
};

//show
export const show = (req, res) => {
  const id = parseInt(req.params.id);

  const articolo = articoli.find(articolo => articolo.id === id);

  if (!articolo) {
    res.status(404);
    res.json({
      error: "Not found",
      message: "Articolo non trovato",
    });
  }

  res.json(articolo);
};

//store
export const store = (req, res) => {
  res.send("Creazione nuovo articolo");
};

//update
export const update = (req, res) => {
  res.send("Modificato (POST) articolo con id: " + req.params.id);
};

//modify
export const modify = (req, res) => {
  res.send("Modificato (PATCH) articolo con id: " + req.params.id);
};

//destroy
export const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const articolo = articoli.find(articolo => articolo.id === id);

  if (!articolo) {
    res.status(404);
    res.json({
      status: 404,
      error: "Not found",
      message: "Articolo non trovato",
    });
  }

  articoli.splice(articoli.indexOf(articolo), 1);

  /* QUI RISPONDO CON ARTICOLI DOPO SPLICE E ID ARTICOLO CANCELLATO 
    res.json({
    articoli: articoli,
    cancellato: `Cancellato l'articolo con ID: ${articolo.id}`,
  }); */

  console.log({ articoli: articoli });

  res.sendStatus(204);
};
