import { ITaskModel } from "../interfaces/todo.interface";
import { TodoModel } from "../models/todo.model";

async function get() {
    return await TodoModel.find();
}

async function getId(_id: string) {
    return await TodoModel.findById({ _id });
}

async function post(title: string, task: ITaskModel) {
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

async function putId(idTask: string, title: string, task: ITaskModel) {
    const putTodo = await TodoModel.findOne({ 'task._id': idTask });
    putTodo.title = title;
    putTodo.task[0].title = task.title;
    putTodo.task[0].due = task.due;
    putTodo.task[0].text = task.text;
    await putTodo.save();

    return putTodo;
}

async function deleteId(_id: string) {
    return await TodoModel.deleteOne({ _id: _id });
}

export default { deleteId, get, getId, post, putId };