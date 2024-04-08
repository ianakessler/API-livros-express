import { autores } from "../models/autor.js";

async function getAutor(req, res, next){
    try{
        const retorno = await autores.find({});
        res.status(200).send(retorno);
    } catch(error){
        next(error);
    }
}

async function getAutorById(req, res, next){
    const id = req.params.id;
    try{
        const retorno = await autores.findById(id);
        
        if(retorno !== null){
            res.status(200).send(retorno);
        } else{
            res.status(404).send({message: "Id não localizado"});
        }
    } catch(error){
        next(error);
    }
}

async function postAutor(req, res, next){
    const novoAutor = req.body;
    console.log(novoAutor);
    try{
        await autores.create(novoAutor);
        res.status(200).send("Autor cadastrado com sucesso!");
    } catch(error){
        next(error);
    }
}

async function editAutorById(req, res, next){
    const id =  req.params.id;
    const updatedAutor = req.body;
    try{
        await autores.findByIdAndUpdate(id, updatedAutor);
        res.status(200).send("Autor editado com sucesso!");
    } catch(error){
        next(error);
    }
}

async function deleteAutorById(req, res, next){
    const id = req.params.id;
    try{
        await autores.findByIdAndDelete(id);
        res.status(200).send("Autor deletado com sucesso");
    } catch(error){
        next(error);
    }
}

export{
    getAutor,
    postAutor,
    editAutorById,
    deleteAutorById,
    getAutorById
};