const each = require('lodash/each')

export const EventEmitter = {
	events: {},
	dispatch: function (event, data) {
		if (!this.events[event]) return
		each(this.events[event], callback => callback(data))
	},
	subscribe: function (event, callback) {
		if (!this.events[event]) this.events[event] = []
		this.events[event].push(callback)
	}
}
