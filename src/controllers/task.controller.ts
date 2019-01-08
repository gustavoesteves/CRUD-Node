import { Router } from "express";
import service from "../services/task.service";

const routes = Router();

routes.get('/:id', (req, res, next) => {
    service.getId(req.params.id)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.post('/:id', (req, res, next) => {
    service.post(req.params.id, req.body.task)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.put('/:id', (req, res, next) => {
    service.putId(req.params.id, req.body.task)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});

routes.delete('/:id', (req, res, next) => {
    service.deleteId(req.params._id)
        .then(value => res.json(value))
        .catch(reason => next(reason));
});


export default routes;