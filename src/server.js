const express = require('express');
const route = require('./route');
const path = require('path')
const server = express();


server.use(route)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
server.listen(3000, () => console.log('Servidor em execução')
)

