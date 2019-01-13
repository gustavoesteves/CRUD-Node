export enum EMassage {
    ApplicationError = 'ApplicationError',
    ValidationError = 'ValidationError',
    UnauthorizedError = 'UnauthorizedError',
    NotFound = 'NotFound'
}

export class ResponseError extends Error {
    status: number;
    constructor(status: number, message: string, name?: EMassage) {
        super();
        this.name = name;
        this.message = message;
        this.status = status;
    }
}