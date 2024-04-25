const express = require("express") // otimizar a construção de aplicações web e APIs, tornando-se um dos Frameworks mais populares da internet e que utiliza o Node para execução do javascript como linguagem de back-end.
const router = express.Router() //configuração da primeira parte da rota
const cors  =  require('cors')   //importa o módulo de uso do CORS para permitir acesso externo à API
const conectaBancoDeDados = require('./dataBase')  //Ligando o banco de dados ao arquivo conectaBancoDeDados
conectaBancoDeDados() // chamando a função que conecta com o banco de dados 
const Mulher = require ('./mulherModel')
const app = express() //iniciando o app
app.use (express.json()) //tratando requisições
app.use(cors())       //habilitando o acesso externo
//-------------------------------------------------------------------------------------------------------

//Rota responsável por criar uma mulher no Banco de Dados
const porta = 3333 //iniciando a porta

//-------------------------------------------------------------------------------------------------------
// GET
async function mostraMulheres (request, response) {
    try {
        const mulherDataBase = await Mulher.find()
        response.json (mulherDataBase) //retornar os dados para quem fez a requisição
    } catch (erro){
         console.log(erro)
    }
}

//-------------------------------------------------------------------------------------------------------
//POST
async function criaMulher (request, response) {
    const novaMulher =  new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao:request.body.citacao
    })
    try{
        const mulherCriada =await novaMulher.save ()
        response.status(201).json(mulherCriada) 
    } catch(erro){ 
        console.log(erro)
    }


}

//-------------------------------------------------------------------------------------------------------
//PATCH
async function corrigeMulher (request, response) {

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEncontrada = request.body.imagem
        }
        
        if (request.body.citacao) {
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await  mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancoDeDados)

        }  catch (erro) {
        console.log(erro)
        }
   
}

//-------------------------------------------------------------------------------------------------------
//DELETE
async function deletaMulher (request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({messagem: 'Mulher deletada com sucesso!'})
    }catch (erro) {
        console.log (erro)
    }
    

}

//-------------------------------------------------------------------------------------------------------
app.use(router.get ( '/mulheres',mostraMulheres)) //configuração da rota GET/mulheres
app.use(router.post ( '/mulheres',criaMulher))//configuração da rota POST/mulheres
app.use(router.patch ( '/mulheres/:id',corrigeMulher))//configuração da rota PATCH/mulheres
app.use(router.delete ( '/mulheres/:id',deletaMulher))//configuração da rota DELETA/mulheres


//-------------------------------------------------------------------------------------------------------
//PORTA  
function mostraPorta()  {
    console.log( `Servidor criado e rodando na porta`, porta )
}

//-------------------------------------------------------------------------------------------------------
app.listen(porta, mostraPorta) // servidor ouvindo a porta



