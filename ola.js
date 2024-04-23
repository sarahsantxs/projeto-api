const express = require("express") // otimizar a construção de aplicações web e APIs, tornando-se um dos Frameworks mais populares da internet e que utiliza o Node para execução do javascript como linguagem de back-end.
const router = express.Router()

const app = express()
const porta = 3333


function mostraOla(request, response) {
    response.send ("Olá!")
}


function mostraPorta()  {
    console.log( `Servidor criado e rodando na porta`, porta )
}


app.use(router.get('/ola',mostraOla))
//http://localhost:333

app.listen(porta, mostraPorta)