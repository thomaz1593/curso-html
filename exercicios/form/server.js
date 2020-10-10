const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Faz com que seja feito um parse no body, transformando os dados para serem interpretados pelo req.body
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Alterado!</h1>')
})

app.listen(3003)