import { ITask } from "../interfaces/todo.interface";
import { TodoModel } from "../models/todo.model";

async function get() {
    return await TodoModel.find();
}

async function getId(_id: string) {
    return await TodoModel.findById({ _id });
}

async function post(title: string, task: ITask) {
    const newTodo = new TodoModel({
        title: title,
        task: {
            title: task.title,
            due: task.due,
            text: task.title
        }
    });
    await newTodo.save();

    return newTodo;
}

async function putId(_id: string, idTask: string, title: string, task: ITask) {
    const putTodo = await TodoModel.findById({ _id });
    putTodo.title = title;
}

async function deleteId(_id: string) {
    return await TodoModel.deleteOne({ _id: _id });
}

export default { deleteId, get, getId, post, putId };