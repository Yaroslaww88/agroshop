module.exports = {
  'pg': {
    'user': process.env.USER,
    'host': 'localhost',
    'database': 'productsDB',
    'password': '1',
    'port': 5432,
  },
  'applicationStartPort': 3330,
  'cookieSecret': 'secret-secret-secret-123',
  'corsOptions': {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "credentials": true,
      "optionsSuccessStatus": 204
    }
}

//mongo-backend-docker