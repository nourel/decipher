# decipher

A simple async client for the Decipher API
https://release.decipherinc.com/s/local/api.html

## Installation

```
npm install --save decipher-api-client
```

## Getting Started

1. Import your module
2. Initialize module with your API_KEY(Mandatory) and headers(Optional)
3. Send your request

```
const decipher = require('decipher-api-client')

decipher.initialize({api_key:'YOUR_API_KEY',headers:{'OPTIONAL HEADERS'}})

decipher.get().users()
```

## API

List of Implemented API endpoints

### GET

[surveyData](https://release.decipherinc.com/s/local/api.html#data-input-and-output-data)(surveyID *__required__*,params *__optional__*)
```
decipher.get().surveyData('12/123',{format:'json',fields:'email,ipAddress',cond:'qualified'})
```

[users](https://release.decipherinc.com/s/local/api.html#research-hub-user-provisioning-get)(params *__optional__*)
```
decipher.get().users()
```

[companies]https://release.decipherinc.com/s/local/api.html#research-hub-company-management-get()
```
decipher.get().companies()
```

### POST

bounced(params *__required__*)
-can pass in as an array of emails ['email1,email2'] or object {emails:['email1,email2']}
https://release.decipherinc.com/s/local/api.html#sample-management-bounce-backs-post
```
decipher.post().bounced({emails:['email1,email2']})
```

### PUT

TBD

### DELETE

TBD

## Contributing

Please read [CONTRIBUTING.md](https://github.com/nourel/decipher/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 