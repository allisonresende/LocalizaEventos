const express = require('express');
const routes = require('./routes');

const cors = require('cors'); /* segurança de acesso, estudar mais */

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3001);