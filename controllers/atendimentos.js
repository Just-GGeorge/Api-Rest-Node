module.exports = app => {
    app.get('/atendimentos',(req, res) => res.send('Você está na rota do atendimento e realizando um get'))

    app.post('/atendimentos',(req,res) =>{
        console.log(req.body)
        res.send('Você está na rota de atendimentos realizando um post')
    })
}