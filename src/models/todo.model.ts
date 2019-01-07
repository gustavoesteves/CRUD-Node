import { model, Schema } from "mongoose";
import { ITodoModel } from "../interfaces/todo.interface";

const TodoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    task: {
        title: {
            type: String,
            require: true
        },
        due: Date,
        text: String
    }
});

export const TodoModel = model<ITodoModel>('Todo', TodoSchema);