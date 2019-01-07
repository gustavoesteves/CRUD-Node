import * as logger from "winston";
import { Request, Response } from "express";
import { eErrors } from "../utils/error.util";

export function error(err: Error, req: Request, res: Response, next: Function) {
    console.log(err.message);

    if (err.name === eErrors.ApplicationError) {
        // custom application error
        return res.status(400).json(err);
    }

    if (err.name === eErrors.ValidationError) {
        // mongoose validation error
        return res.status(400).json(err.message);
    }

    if (err.name === eErrors.UnauthorizedError) {
        // jwt authentication error
        return res.status(401).json('Invalid Token');
    }

    if (err.name === eErrors.NotFound)
        return res.status(404).json(err.message);

    // default to 500 server error
    return res.status(500).json(err.message);
}