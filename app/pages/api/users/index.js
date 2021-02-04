import { defaultUsers } from 'lib/constants'

import { openConnection } from '../../../lib/mongodb'

export default async function handler(req, res) {
	const db = await openConnection();
	const users = await db.collection('users').find().toArray()
	res.status(200).json(users);
}
