import livro from "../models/livros.js";

async function getLivros(req, res){
    try{
        const retorno = await livro.find({});
        res.status(200).send(JSON.stringify(retorno));
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function postLivro(req, res){
    const novoLivro = req.body;
    try{
        console.log(novoLivro);
        await livro.create(novoLivro);
        res.status(201).send("Livro criado com sucesso!");
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function deleteLivroById(req, res){
    const id = req.params.id;
    console.log(id);
    try{
        await livro.findByIdAndDelete(id);
        res.status(200).send("Livro deletado com sucesso!");
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}

async function editLivroById(req, res){
    const id = req.params.id;
    try{
        await livro.findByIdAndDelete(id, req.body);
        res.status(200).send("Livro atualizado");
    } catch(error){
        res.status(500).send({status: 500, erro: error});
    }
}



export{
    getLivros, 
    postLivro,
    deleteLivroById,
    editLivroById
};