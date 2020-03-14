module.exports = {
    'mongoUrl': 'mongodb://mongo-backend-docker:8333/agroshop',
    'cookieSecret': 'secret-123',
    'corsOptions': {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "credentials": true,
        "optionsSuccessStatus": 204
      }
}

//mongo-backend-docker