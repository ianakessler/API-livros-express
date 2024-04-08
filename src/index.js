import express from "express";
import "dotenv/config.js";
import router from "./middlewares/router.js";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";
import erro from "./middlewares/erro.js";
import manipulador404 from "./middlewares/manipulador404.js";

const app = express();
const port = 9999;
const HOST = "0.0.0.0";
app.use(cors({origin: "*"}));
const db = await dbConnect();

router(app);
app.use(erro);
app.use(manipulador404);

db.on("error", (erro)=>{
    console.error(erro);
});

db.once("open", ()=>{
    console.log("Banco de dados conectado");
});



app.listen(port, HOST, ()=>{
    console.log(`Rodando em ${HOST}:${port}`);
});
