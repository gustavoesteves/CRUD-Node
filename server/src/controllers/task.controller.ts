import { Router } from "express";
import service from "../services/task.service";

const routes = Router();

routes.get('/:idTodo', (req, res, next) => {
    service.getId(req.params.idTodo)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.post('/:idTodo', (req, res, next) => {
    service.post(req.params.idTodo, req.body)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.put('/:idTask', (req, res, next) => {
    service.putId(req.params.idTask, req.body)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.delete('/:idTask', (req, res, next) => {
    service.deleteId(req.params.idTask)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

export default routes;