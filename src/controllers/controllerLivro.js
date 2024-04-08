import livro from "../models/livros.js";

async function getLivros(req, res, next){
    try{
        const retorno = await livro.find({});
        res.status(200).send(JSON.stringify(retorno));
    } catch(error){
        next(error);
    }
}

async function getLivroById(req, res, next){
    try{
        const id = req.params.id;
        const retorno = await livro.findById(id);
        if(retorno !== null){

            res.status(200).send(retorno);
        } else{
            res.status(404).send("Id não localizado.");
        }
    } catch(error){
        next(error);
    }
}

async function postLivro(req, res, next){
    const novoLivro = req.body;
    try{
        await livro.create(novoLivro);
        res.status(201).send("Livro criado com sucesso!");
    } catch(error){
        next(error);
    }
}

async function deleteLivroById(req, res, next){
    const id = req.params.id;
    console.log(id);
    try{
        await livro.findByIdAndDelete(id);
        res.status(200).send("Livro deletado com sucesso!");
    } catch(error){
        next(error);
    }
}

async function editLivroById(req, res, next){
    const id = req.params.id;
    try{
        await livro.findByIdAndDelete(id, req.body);
        res.status(200).send("Livro atualizado");
    } catch(error){
        next(error);
    }
}



export{
    getLivros, 
    postLivro,
    deleteLivroById,
    editLivroById,
    getLivroById
};