import mongoose from "mongoose";
import { autores } from "../models/autor.js";

async function getAutor(req, res){
    try{
        const retorno = await autores.find({});
        res.status(200).send(retorno);
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function getAutorById(req, res){
    const id = req.params.id;
    console.log(id);
    try{
        const retorno = autores.findById(id);
        
        if(id !== null){
            res.status(200).send(retorno);
        } else{
            res.status(404).send("Not Found");
        }
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function postAutor(req, res){
    const novoAutor = req.body;
    console.log(novoAutor);
    try{
        await autores.create(novoAutor);
        res.status(200).send("Autor cadastrado com sucesso!");
    } catch(error){
        res.status(500).send({status: 500, erro: error.message});
    }
}

async function editAutorById(req, res){
    const id =  req.params.id;
    const updatedAutor = req.body;
    try{
        await autores.findByIdAndUpdate(id, updatedAutor);
        res.status(200).send("Autor editado com sucesso!");
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function deleteAutorById(req, res){
    const id = req.params.id;
    try{
        await autores.findByIdAndDelete(id);
        res.status(200).send("Autor deletado com sucesso");
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

export{
    getAutor,
    postAutor,
    editAutorById,
    deleteAutorById,
    getAutorById
};