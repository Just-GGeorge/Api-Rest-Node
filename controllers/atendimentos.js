const Atendimento = require ('../models/atendimento-models')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        Atendimento.buscaPorID(id,res)
    })

    app.post('/atendimentos',(req,res) =>{
        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
    })
    // valores por não se tratar do atendimento completo, apenas alguns campos
    app.patch('/atendimentos/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id,valores,res)    
    } )

    app.delete('/atendimentos/:id',(req,res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id,res)
    })
}

