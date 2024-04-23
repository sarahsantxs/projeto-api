const express = require("express") // otimizar a construção de aplicações web e APIs, tornando-se um dos Frameworks mais populares da internet e que utiliza o Node para execução do javascript como linguagem de back-end.

const app = express()
const porta = 3333

function mostraPorta()  {
    console.log( `Servidor criado e rodando na porta`, porta )
}

app.listen(porta, mostraPorta)