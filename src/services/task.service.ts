import { ITaskModel } from "../interfaces/task.interface";
import { TodoModel } from "../models/todo.model";

async function getId(_id: string) {
    return await TodoModel.findById({ 'task._id': _id });
}

async function post(_id: string, task: ITaskModel) {
    console.log(task);
    const newTask = {
        $push: {
            task: {
                title: task.title,
                text: task.text
            }
        }
    };

    const todo = await TodoModel.findByIdAndUpdate({ _id: _id }, newTask);

    return todo;
}

async function putId(_id: string, task: ITaskModel) {
    const putTodo = await TodoModel.findOne({ 'task._id': _id });

    putTodo.task[0].title = task.title;
    putTodo.task[0].due = task.due;
    putTodo.task[0].text = task.text;
    await putTodo.save();

    return putTodo;
}

async function deleteId(_id: string) {
    return await TodoModel.deleteOne({ _id: _id });
}

export default { deleteId, getId, post, putId };