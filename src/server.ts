import * as express from 'express'

import appConfig from './appConfig'

const app = express()

appConfig(app)

app.get('/', (req, res) => {
	// tslint:disable-next-line
	res.send("Awesome! We're live debugging this!")
})

app.post('/redox/test', (req, res) => {
	console.log('/redox/test called')
	res.send(200)
})

process.on('uncaughtException', (err) => {
	// tslint:disable-next-line
	console.log('Oops! err: ', err) //TODO change to winston
})

app.listen(80, () => {
	// tslint:disable-next-line
	console.log(`Listening at port: 3001`)
})
