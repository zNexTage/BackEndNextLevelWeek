import express from 'express'
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesController: ClassesController = new ClassesController();
const connectionsController: ConnectionsController = new ConnectionsController();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.post("/connections", connectionsController.create)
routes.get("/connections", connectionsController.index)

export default routes;