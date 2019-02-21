'use strict'
const request = require('request-promise')
const util = include('/util.js')

module.exports = (options) => {
	const headers = options.headers
	if(!headers) throw new Error('Decipher client not initialized')
	if(!headers['x-apikey']) throw new Error('API Key Missing')
	const API_ENDPOINT = options.api_endpoint || DEFUALT_API_ENDPOINT
	const API_VERSION = options.api_version || DEFUALT_API_VERSION
	const API_PATH = API_ENDPOINT + '/api/' + API_VERSION
	/*
	PARAMS:
		survey
			string (required) 

		format
			string (optional) Default: tab 

		layout
			int (optional) Default: null 

		fields
			array (optional)

		start
			datetime (optional) Example: 2011-12-14T17:50Z
			start time using ISO 8601 format. E.g. “2011-12-14T17:50Z”

		end
			datetime (optional) 

		cond
			string (optional) Default: All 

		stacking
			string (optional) 
	*/
	async function surveyData (survey,params) {
		const uri_params = util.parameterize(params)

		const uri = API_PATH + '/surveys/' + survey + '/data/' + uri_params

		const res = await request.get({uri:uri, headers:headers})
		return res

	}

	/*
	PARAMS:
		company
			string (optional)
	*/
	async function users (params) {
		const uri_params = util.parameterize(params)

		const uri = API_PATH + '/rh/users' + uri_params
		
		const res = await request.get({uri:uri, headers:headers})
		return res
	}

	async function companies () {
		const uri = API_PATH + '/rh/companies'

		const res = await request.get({uri:uri, headers:headers})
		return res
	}

	return {
		surveyData: surveyData,
		users: users,
		companies: companies
	}
}