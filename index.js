require('./global')
const get = require('./api/get')
const post = require('./api/post')
//const del = require('./api/del')

module.exports = {
	initialize: (options) => {
		this.options = {}
		this.options.headers = options.headers || {}
		this.options.headers['x-apikey'] = options.api_key
		this.options.api_endpoint = options.api_endpoint
		this.options.api_version = options.api_version
	},

	get: () => {
		return get(this.options)
	},

	post: () => {
		return post(this.options)
	}
}
