import { Router } from "express";
import service from "../services/todo.service";

const routes = Router();

routes.get('/', (req, res, next) => {
    service.get()
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.get('/:id', (req, res, next) => {
    service.getId(req.params.id)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.post('/', (req, res, next) => {
    service.post(req.body.title, req.body.task)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.put('/:id/:idTask', (req, res, next) => {
    service.putId(req.params._id, req.params.idTask, req.body.title, req.body.task)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.delete('/:id', (req, res, next) => {
    service.deleteId(req.params._id)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});


export default routes;