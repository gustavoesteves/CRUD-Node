export enum eErrors {
    ApplicationError = 'ApplicationError',
    ValidationError = 'ValidationError',
    UnauthorizedError = 'UnauthorizedError',
    NotFound = 'NotFound'
}

export function Errors(message: string, name?: eErrors): Error {
    let err = new Error();
    err.name = name;
    err.message = message;
    return err;
}