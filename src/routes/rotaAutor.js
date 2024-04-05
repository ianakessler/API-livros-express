import { Router } from "express";
import { deleteAutorById, editAutorById, getAutor, getAutorById, postAutor } from "../controllers/controllerAutor.js";

const rotaAutores = Router();

rotaAutores.get("/autores/:id", getAutorById);
rotaAutores.get("/autores", getAutor);
rotaAutores.post("/autores", postAutor);
rotaAutores.put("/autores/:id", editAutorById);
rotaAutores.delete("/autores/:id", deleteAutorById);

export default rotaAutores;