import { Router } from "express";
import { deleteLivroById, editLivroById, getLivros, postLivro, getLivroById } from "../controllers/controllerLivro.js";

const rotaLivros = Router();

rotaLivros.get("/livros/:id", getLivroById);
rotaLivros.get("/livros", getLivros);
rotaLivros.post("/livros", postLivro);
rotaLivros.delete("/livros/:id", deleteLivroById);
rotaLivros.put("/livros/:id", editLivroById);

export default rotaLivros;