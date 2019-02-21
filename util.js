module.exports = {
	parameterize: (params = {}) => {
		let uri_params = params ? '?' : ''
		uri_params += Object.keys(params).map((param_key)=>{
			return param_key + '=' + encodeURIComponent(params[param_key])
		}).join('&')

		return uri_params
	}
}