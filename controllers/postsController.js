import { articoli } from "../data/articoli.js";

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
    return res.json({
      error: "Not found",
      message: "Articolo non trovato",
    });
  }

  res.json(articolo);
};

//store
export const store = (req, res) => {
  const newId = articoli[articoli.length - 1].id + 1;
  const newArticolo = {
    id: newId,
    title: "Crostoni zucca e brie",
    content:
      "Tostare delle fette di pane, aggiungere la pasta di zucca e delle fette di brie, ripassare in grill per qualche minuto",
    img: "images/crostoni_zucca.jpeg",
    tags: ["salati", "allergeni", "autunno"],
  };

  articoli.push(newArticolo);

  console.log(articoli);

  res.status(201);
  res.json(newArticolo);
};

//update
export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const articolo = articoli.find(articolo => articolo.id === id);

  if (!articolo) {
    res.status(404);
    return res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }

  articolo.title = req.body.title;
  articolo.content = req.body.content;
  articolo.img = req.body.img;
  articolo.tags = req.body.tags;

  console.log(articoli);
  res.json(articoli);
};

//modify
export const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const articolo = articoli.find(articolo => articolo.id === id);

  if (!articolo) {
    res.status(404);
    return res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }

  /*QUI L'OPERATORE TERNARIO CONTROLLA SOLO SE req.body.title É TRUTHY, 
    NON VA BENE SE FALSY COME STRINGA VUOTA
  req.body.title ? (articolo.title = req.body.title) : articolo.title;
  req.body.content ? (articolo.content = req.body.content) : articolo.content;
  req.body.img ? (articolo.img = req.body.img) : articolo.img;
  req.body.tags ? (articolo.tags = req.body.tags) : articolo.tags; */

  articolo.title = req.body.title ?? articolo.title;
  articolo.content = req.body.content ?? articolo.content;
  articolo.img = req.body.img ?? articolo.img;
  articolo.tags = req.body.tags ?? articolo.tags;

  console.log(articoli);
  res.json(articoli);
};

//destroy
export const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const articolo = articoli.find(articolo => articolo.id === id);

  if (!articolo) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Not found",
      message: "Articolo non trovato",
    });
  }

  articoli.splice(articoli.indexOf(articolo), 1);

  console.log({ articoli: articoli });

  res.sendStatus(204);
};
