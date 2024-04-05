import Express from "express";
import rotaLivros from "../routes/rotaLivros.js";
import rotaAutores from "../routes/rotaAutor.js";

const router = (app) => {
    app.route("/").get((req,res)=> {
        res.send("200");
    });

    app.use(Express.json(), rotaLivros, rotaAutores);
};

export default router;