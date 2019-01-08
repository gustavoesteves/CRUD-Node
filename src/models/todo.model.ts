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
    end: Date,
    task: [{
        title: {
            type: String,
            unique: true,
            require: true
        },
        start: {
            type: Date,
            default: Date.now
        },
        end: Date,
        due: Date,
        text: String
    }]
});

export const TodoModel = model<ITodoModel>('Todo', TodoSchema);