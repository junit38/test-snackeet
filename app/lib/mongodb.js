const MongoClient = require('mongodb').MongoClient

const con = {
	url: 'mongodb+srv://@cluster0.csezk.mongodb.net/<dbname>',
	opts: {
		auth: {
			user: 'snackeet',
			password: 'snackeet'
		}
	}
}

async function openConnection (database = 'test') {
	const connection = await MongoClient.connect(con.url, con.opts)
	return connection.db(database)
}

module.exports = {
	openConnection,
	MongoClient
}
