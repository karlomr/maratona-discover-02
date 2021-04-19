//O Roteamento refere-se à definição de terminais do aplicativo (URIs) 
//e como eles respondem às solicitações do cliente.
//referência:https://expressjs.com/pt-br/guide/routing.html
const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//set template engine
server.set('view engine', 'ejs')

//directory with view folder. necessary for ejs
server.set('views', path.join(__dirname, 'views'))

//static archive in folder public
server.use(express.static("public"))

//use req.body only disponible if use this code
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)


server.listen(2000, () => console.log('running'))

