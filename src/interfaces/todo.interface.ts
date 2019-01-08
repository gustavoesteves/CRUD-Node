import { Document } from "mongoose";
import { ITaskModel } from "./task.interface";

export interface ITodo {
    title: string;
    start: Date;
    end: Date;
    task: [ITaskModel]
}

export interface ITodoModel extends ITodo, Document { };