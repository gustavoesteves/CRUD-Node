import { ITaskModel } from "../interfaces/task.interface";
import { TaskModel } from "../models/task.model";

async function getId(_id: string) {
    return await TaskModel.find({ idTodo: _id });
}

async function post(_id: string, task: ITaskModel) {
    const newTask = new TaskModel({
        idTodo: _id,
        title: task.title,
        due: task.due,
        text: task.text
    });

    await newTask.save();

    return newTask;
}

async function putId(_id: string, task: ITaskModel) {
    const putTodo = await TaskModel.findOne({ _id: _id });

    putTodo.title = task.title;
    putTodo.due = task.due;
    putTodo.text = task.text;
    await putTodo.save();

    return putTodo;
}

async function deleteId(_id: string) {
    return await TaskModel.deleteOne({ _id: _id });
}

export default { deleteId, getId, post, putId };