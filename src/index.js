import express from "express";
import "dotenv/config.js";
import router from "./middlewares/router.js";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";
import teste from "./middlewares/teste.js";

const app = express();
const port = 9999;
const HOST = "0.0.0.0";
app.use(cors({origin: "*"}));
const db = await dbConnect();


teste(app);
router(app);

db.on("error", (erro)=>{
    console.error(erro);
});

db.once("open", ()=>{
    console.log("Banco de dados conectado");
});



app.listen(port, HOST, ()=>{
    console.log(`Rodando na porta ${port}`);
});
