const express = require('express')
const app = express()
// quando executar a linha abaixo a migration será executada e as tabelas serão criadas, caso ainda não existam
// num ambiente onde eu tenha contigências, com vários backends, essa estratégia automatica de execução das migrations pode dar ruim
const db = require('./config/db')
const consign = require('consign')

// const bodyParser = require('body-parser')

// O Express trabalha como uma cadeia de responsabilidades onde uma função vai chamando outra, etc...

// app.use(meuJson())
// app.use(bodyParser.json())

// function meuJson() {
// 	return (req, res, next) => {
// 		console.log('Antes de tudo, use o meu middleware...')
// 		next()
// 	}
// }

// o parâmetro next deve ser explicitado quando eu tenho mais de uma função para atender uma mesma requisição de uma mesma url
// com isso eu consigo criar uma cadeia de repsonsablidades, ou, um medleware
// app.post('/blabla/:valor', (req, res, next) => {
// 	console.log('Func 0')
// 	next()
// })

// app.post('/blabla/:valor', (req, res, next) => {
// 	console.log('Func 1')
// 	// res.status(200).send('<h1>Meu Backend = ' + req.params.valor + '</h1>')
// 	// res.status(200).send('<h1>Meu Backend = ' + JSON.stringify(req.body) + '</h1>')
// 	// res.status(200).send('<h1>Meu Backend = ' + req.query.sobrenome + '</h1>')
// 	res.status(200).send('<h1>Meu Backend = ' + req.body.dependentes[0].nome + '</h1>')
// 	next()
// })

// app.post('/blabla/:valor', (req, res) => {
// 	console.log('Func 3')
// })

consign()
	.include('./config/passport.js')
	.then('./config/middlewares.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app)

app.db = db

app.get('/', (req, res) => {
	res.status(200).send('<h1>Meu Backend!</h1>')
})

app.listen(3000, () => {
	console.log('Backend executando...')
})