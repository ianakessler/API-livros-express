
const teste = (app) => {
    app.get("/", (req, res, next)=>{
        console.log("requisição recebida");
        next();
    });
};

export default teste;