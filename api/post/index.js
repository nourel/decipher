'use strict'
const request = require('request-promise')

module.exports = (options) => {
	const headers = options.headers
	if(!headers) throw new Error('Decipher client not initialized')
	if(!headers['x-apikey']) throw new Error('API Key Missing')
	const API_ENDPOINT = options.api_endpoint || DEFUALT_API_ENDPOINT
	const API_VERSION = options.api_version || DEFUALT_API_VERSION
	const API_PATH = API_ENDPOINT + '/api/' + API_VERSION

	async function bounced (params) {
		let emails
		if (Array.isArray(params)) {
			emails = {emails:params}
		} else if (typeof params === 'object' ) {
			emails = params
		} else {
			throw new Error('param must be an array or emails object')
		}

		const uri = API_PATH+ '/bulk/bounced/'

		const res = await request.post({uri:uri, headers:headers, body:JSON.stringify(emails)})
		return res
	}

	return {
		bounced: bounced
	}
}