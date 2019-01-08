import { Document } from "mongoose";

interface ITodo {
    title: string;
    start: Date;
    end: Date;
    task: ITaskModel[];
}

interface ITask {
    title: string;
    start: Date;
    end: Date;
    due?: Date;
    text?: string;
}

export interface ITaskModel extends ITask, Document { };

export interface ITodoModel extends ITodo, Document { };