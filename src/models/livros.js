import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const livrosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    preco: {type: Number, required: true},
    autor: autorSchema
},{versionKey: false});

const livro = mongoose.model("livros", livrosSchema);

export default livro;