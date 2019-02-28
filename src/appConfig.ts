import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as path from 'path'

export default function appConfig(app) {
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))

	// parse application/json
	app.use(bodyParser.json())

	app.use(express.static(path.join(__dirname, 'static')))
	app.use('/3D-models', express.static(path.join(__dirname, 'static/3DModels')))

	app.use((req, res, next) => {
		// tslint:disable-next-line
		console.log('req.url', req.url)
		next()
	})
}
