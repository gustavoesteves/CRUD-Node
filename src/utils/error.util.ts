export enum EMassage {
    ApplicationError = 'ApplicationError',
    ValidationError = 'ValidationError',
    UnauthorizedError = 'UnauthorizedError',
    NotFound = 'NotFound'
}

export function Errors(status: number, message: string, name?: EMassage): Error {
    let err = new ResponseError();
    err.name = name;
    err.message = message;
    err.status = status;
    return err;
}

export class ResponseError extends Error {
    status: number;
    constructor() {
        super();
    }
}