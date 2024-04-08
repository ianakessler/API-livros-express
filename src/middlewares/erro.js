import { mongoose } from "mongoose";
import requisicaoIncorreta from "../Errors/requisicaoIncorreta.js";
import erroValidacao from "../Errors/erroValidacao.js";
import ErroBase from "../Errors/erroBase.js";

// eslint-disable-next-line no-unused-vars
const erro = (error, req, res, next) => {
    if(error instanceof mongoose.Error.CastError){
        new requisicaoIncorreta().enviarResposta(res);

    }else if(error instanceof mongoose.Error.ValidationError){
        new erroValidacao(error).enviarResposta(res);
       
    }else{
        new ErroBase().enviarResposta(res);
        
    }
   
};

export default erro;