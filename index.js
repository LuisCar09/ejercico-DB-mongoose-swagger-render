const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT ?? 3500;
const { dbConnection } = require('./config/config');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const routes = require('./routes');

app.use(express.json());

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs))

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));