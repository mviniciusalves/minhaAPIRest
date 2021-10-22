// iniciar o express, carregar os middlewares e rotas

import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'  // carrega o arquivo de rotas e busca o arquivo index.js
import database from './config/database'

const app = express()

app.use(bodyParser.json())
app.use('/', routes) // routes como parametro da função use, logo todas requisições serão administradas pelo routes
app.database = database

export default app