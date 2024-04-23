const express = require("express") // otimizar a construção de aplicações web e APIs, tornando-se um dos Frameworks mais populares da internet e que utiliza o Node para execução do javascript como linguagem de back-end.
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = 	[
    {
        nome: 'sara santos' , 
        imagem : 'https://media.licdn.com/dms/image/D4D03AQGHtY85-WV0zg/profile-displayphoto-shrink_400_400/0/1709928689743?e=1719446400&v=beta&t=KclE6c_C8UwiPcPT36L50KuOjsxKz-VOgTzqqT7b038' , 
        minibio : 'estudante'
    } , 

    {
        nome: 'xxxxxxxxxxxx' , 
        imagem : 'https://media.licdn.com/dms/image/D4D03AQGHtY85-WV0zg/profile-displayphoto-shrink_400_400/0/1709928689743?e=1719446400&v=beta&t=KclE6c_C8UwiPcPT36L50KuOjsxKz-VOgTzqqT7b038' , 
        minibio : 'xxxxxxxxx'
    } , 

    {
        nome: 'xxxxxxxxxxxxx' , 
        imagem : 'https://media.licdn.com/dms/image/D4D03AQGHtY85-WV0zg/profile-displayphoto-shrink_400_400/0/1709928689743?e=1719446400&v=beta&t=KclE6c_C8UwiPcPT36L50KuOjsxKz-VOgTzqqT7b038' , 
        minibio : 'xxxxxxxxxxxxxxx'
    }
]

function mostraMulheres (request, response) {
    response.json(mulheres)
}


function mostraPorta()  {
    console.log( `Servidor criado e rodando na porta`, porta )
}

app.use(router.get ( '/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)