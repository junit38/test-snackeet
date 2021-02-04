
import { defaultUsers } from 'lib/constants'

export default function userHandler ({ query: { id } }, res) {
	const filtered = defaultUsers.filter((p) => p.id === id)

	// User with id exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res.status(404).json({ message: `User with id: ${id} not found.` })
	}
}
