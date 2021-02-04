
export class NotFoundError extends Error {
	name = 'NotFoundError'

	constructor (opts = {}) {
		const {
			status = 404,
			message = 'Resource not found'
		} = opts

		super()
		this.status = status
		this.data = {
			success: false,
			error: message
		}
	}
}


export class InvalidMethodError extends Error {
	name = 'InvalidMethodError'

	constructor (opts = {}) {
		const {
			status = 405,
			message = 'HTTP method not valid'
		} = opts
		super()
		this.status = status
		this.data = {
			success: false,
			error: message
		}
	}
}
