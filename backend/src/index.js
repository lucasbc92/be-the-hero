const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

/*
Métodos HTTP:

GET: Buscar/listar uma informação no back-end
POST: Criar
PUT: ALterar
DELETE: Remover uma informação do back-end
*/

/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) - /users?page=2&name=Lucas
Route Params: Parâmetros utilizados para identificar recursos - /users/:id (ex.:/users/1)
Request Body: Corpo da requisicão, utilizado para criar ou alterar recursos
*/

app.listen(3333);

