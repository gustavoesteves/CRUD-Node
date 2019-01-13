import { model, Schema } from "mongoose";
import { ITodoModel } from "../interfaces/todo.interface";

const TodoSchema = new Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    start: {
        type: Date,
        default: Date.now
    },
    end: Date
});

export const TodoModel = model<ITodoModel>('Todo', TodoSchema);