import * as logger from "winston";
import { Request, Response } from "express";
import { ResponseError } from "../utils/error.util";

export function error(err: ResponseError, req: Request, res: Response, next: Function) {
    return res.status(err.status).json(err.message);
}