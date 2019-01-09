import supertest = require("supertest");
import { server } from "../../../server";
import { ITodoModel } from "../../../interfaces/todo.interface";
import { ITaskModel } from "../../../interfaces/task.interface";
import { TodoModel } from "../../../models/todo.model";
import { TaskModel } from "../../../models/task.model";

describe('task - controller', () => {
    let newTodo: ITodoModel;
    let newTask: ITaskModel;

    beforeAll(async () => {
        newTodo = new TodoModel({ title: 'todo - task test' });
        await newTodo.save();

        newTask = new TaskModel({
            idTodo: newTodo.id,
            title: 'new Task'
        });
        await newTask.save();
    });

    afterAll(async () => {
        await server.close();
        await TodoModel.deleteMany({});
        await TaskModel.deleteMany({});
    });

    describe('getId', async () => {
        test('HP', () => {
            return supertest(server)
                .get(`/api/task/${newTodo.id}`)
                .expect(200);
        });
    });

    describe('postId', async () => {
        test('HP', () => {
            return supertest(server)
                .post(`/api/task/${newTodo.id}`)
                .send({ title: 'other task' })
                .expect(200);
        });
    });

    describe('putId', async () => {
        test('HP', () => {
            return supertest(server)
                .put(`/api/task/${newTask.id}`)
                .send({ title: 'other task chubaca' })
                .expect(200);
        });
    });

    describe('deleteId', async () => {
        test('HP', () => {
            return supertest(server)
                .delete(`/api/task/${newTask.id}`)
                .expect(200);
        });
    });
});