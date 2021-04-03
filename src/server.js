//O Roteamento refere-se à definição de terminais do aplicativo (URIs) 
//e como eles respondem às solicitações do cliente.
//referência:https://expressjs.com/pt-br/guide/routing.html
const express = require("express")
const server = express()
const routes = require("./routes")

server.set('view engine', 'ejs')


//habilite static archive in foilder public
server.use(express.static("public"))

//use req.body only disponible if use this code
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)


server.listen(3000, () => console.log('rodando'))

