import { model, Schema } from "mongoose";
import { ITaskModel } from "../interfaces/task.interface";

const TaskSchema = new Schema({
    idTodo: Schema.Types.ObjectId,
    title: {
        type: String,
        unique: true,
        required: true
    },
    start: {
        type: Date,
        default: Date.now
    },
    end: Date,
    due: Date,
    text: String
});

export const TaskModel = model<ITaskModel>('Task', TaskSchema);