import NaoEncontrado from "../Errors/NaoEncontrado.js";

//eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next) {
    res.status(404).send(new NaoEncontrado);
}

export default manipulador404;