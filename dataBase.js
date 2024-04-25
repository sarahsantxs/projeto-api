const mongoose = require('mongoose')

async function conectaBancoDeDados () {
require('dotenv').config()
    try {
        console.log('Conexão com o banco de dados iniciou')

        await  mongoose.connect(process.env.MONGO_URL)
        console.log ('Conexão com o banco de dados feito com sucesso!')

    } catch(erro) {
        console.error(`Erro na conexão: ${erro}`)
    }
}

module.exports = conectaBancoDeDados