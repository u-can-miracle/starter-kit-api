import { MongoClient } from 'mongodb'
import envs from '../envs'

const mongoUrl = envs.dbPath
const dbName = 'dbName'

const options = {
	useNewUrlParser: true,
	reconnectTries: 60,
	reconnectInterval: 1000,
	poolSize: 10,
	bufferMaxEntries: 0 // If not connected, return errors immediately rather than waiting for reconnect
}

let mongoDb

const db = {
	connect: () => {
		MongoClient.connect(mongoUrl, options, (err, client) => {
			if(err){
				// tslint:disable-next-line
				console.log('err', err)
				return
			}
			// tslint:disable-next-line
			console.log("Connected successfully to mongo")

			mongoDb = client.db(dbName)

			// client.close()
		})
	},
	getDb: () => {
		return mongoDb
	}
}

db.connect()
// Use connect method to connect to the server
export default db
