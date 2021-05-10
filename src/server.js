//O Roteamento refere-se à definição de terminais do aplicativo (URIs)
//e como eles respondem às solicitações do cliente.
//referência:https://expressjs.com/pt-br/guide/routing.html
import express from "express";

import { routes } from './routes.js';

import path  from "path";

// __dirname is not defined in 
//fix bug 
//https://github.com/nodejs/help/issues/2907
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const server = express();
//set template engine
server.set("view engine", "ejs");
console.log(__dirname)
//directory with view folder. necessary for ejs
server.set("views", path.join(__dirname, "views"));

//static archive in folder public
server.use(express.static("public"));

//use req.body only disponible if use this code
server.use(express.urlencoded({ extended: true }));

//routes
server.use(routes);

server.listen(2001, () => console.log("running"));
