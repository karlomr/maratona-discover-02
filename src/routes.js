//library to create server
import { Router } from 'express';
//define routes in express
const routes = Router();

//controllers for model
import ProfileController from './controllers/ProfileController.js';
import JobController from './controllers/JobController.js';
import DashBoardController  from './controllers/DashBoardController.js';

//request, response
 routes.get('/', DashBoardController.index)

routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

export { routes };