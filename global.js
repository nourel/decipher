global.base_dir = __dirname
global.include = (path) => {
	return require(base_dir+path)
}
global.DEFUALT_API_ENDPOINT = 'https://selfserve.decipherinc.com'
global.DEFUALT_API_VERSION = 'v1'