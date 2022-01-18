const Atendimento = require ('../models/atendimento-models')

module.exports = app => {
    app.get('/atendimentos',(req, res) => res.send('Você está na rota do atendimento e realizando um get'))

    app.post('/atendimentos',(req,res) =>{
        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
    })
}

