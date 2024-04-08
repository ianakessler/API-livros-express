import requisicaoIncorreta from "./requisicaoIncorreta.js";

class erroValidacao extends requisicaoIncorreta {
    constructor(error){
        const mensagensError = Object.values(error.errors)
            .map((erro) => erro.message)
            .join("; ");
        

        super(`Os seguintes erros foram encontrados: ${mensagensError}`);
    }
}

export default erroValidacao;