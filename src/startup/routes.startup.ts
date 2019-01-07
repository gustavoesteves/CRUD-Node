import { Application } from "express";
import { get } from "config";
import { json, urlencoded } from "body-parser";
import todo from "../controllers/todo.controller";
import { error } from "../middlewares/error.middleware";

export default function routes(app: Application) {
    // set up our express application
    app.use(json());
    app.use(urlencoded({ extended: true }));
    
    // routes
    app.use('/api/todo', todo);
    app.use(error);
}