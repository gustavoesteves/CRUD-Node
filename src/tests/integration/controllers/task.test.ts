import supertest = require("supertest");
import { server } from "../../../server";
import { ITodoModel } from "../../../interfaces/todo.interface";
import { ITaskModel } from "../../../interfaces/task.interface";
import { TodoModel } from "../../../models/todo.model";

describe('task - controller', () => {
    let newTodo: ITodoModel;

    beforeAll(async () => {
        newTodo = new TodoModel({ title: 'new Todo', task: { title: 'new task' } });
        await newTodo.save();
    });

    afterAll(async () => {
        await TodoModel.deleteMany({});
    });

    describe('getId', async () => {
        test('HP', () => {
            const task: ITaskModel = newTodo.task[0];
            return supertest(server)
                .get(`/api/task/${task.id}`)
                .expect(200);
        });
    });

    describe('postId', async () => {
        test('HP', () => {
            const task: ITaskModel = newTodo.task[0];
            return supertest(server)
                .post(`/api/task/${task.id}`)
                .send({ title: 'other task' })
                .expect(200);
        });
    });
});