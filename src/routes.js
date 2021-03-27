//biblioteca para criar o servidor
const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Karlo",
    avatar: "https://avatars.githubusercontent.com/u/17259816?v=4",
    "monthly-budget": 19000,
    "days-per-week": 5,
    "hours-per-day": 8,
    "vacation-per-year": 2
}

//request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile: profile }))


module.exports = routes;
