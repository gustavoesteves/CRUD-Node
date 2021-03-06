import { Document } from "mongoose";

export interface ITask {
    idTodo: string;
    title: string;
    start: Date;
    end: Date;
    due: Date;
    text: string;
}

export interface ITaskModel extends ITask, Document { };