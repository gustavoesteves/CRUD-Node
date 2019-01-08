import { TodoModel } from "../models/todo.model";

async function get() {
    return await TodoModel.find();
}

async function getId(_id: string) {
    return await TodoModel.findById({ _id: _id });
}

async function post(title: string) {
    const newTodo = new TodoModel({ title: title });
    await newTodo.save();

    return newTodo;
}

async function putId(id: string, title: string) {
    const putTodo = await TodoModel.findOne({ _id: id });

    putTodo.title = title;
    await putTodo.save();

    return putTodo;
}

async function deleteId(_id: string) {
    return await TodoModel.deleteOne({ _id: _id });
}

export default { deleteId, get, getId, post, putId };