//library to create server
const express = require('express');
//define routes in express
const routes = express.Router();

//controllers for model
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashBoardController = require('./controllers/DashBoardController')

//request, response
routes.get('/', DashBoardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;