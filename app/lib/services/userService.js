import axios from 'axios'

export default {
	create,
	get,
	update,
	getAll
}

function create () {
}

async function get () {
}

function update () {
}

async function getAll() {
	return axios.get('/api/users');
}
