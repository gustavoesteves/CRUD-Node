import { Document } from "mongoose";

export interface ITodo {
    title: string;
    task: ITask[];
}

export interface ITask {
    title: string;
    due?: Date;
    text?: string;
}

export interface ITodoModel extends ITodo, Document { };