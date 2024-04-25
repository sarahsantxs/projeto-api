const mongoose = require('mongoose')

const MulherSchema =new mongoose.Schema({ 
    nome: { type: String,
        required: true }, //definindo nome como obrigatório

    imagem: { type: String,
            required: true }, //definindo imagem como obrigatório
    
    citacao: { type: String,
            required: true }, //definindo citacao como obrigatório

    minibio: { type: String,
            required: true }, //definindo minibio como obrigatório

})

module.exports = mongoose.model ('pessoa' , MulherSchema)