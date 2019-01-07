import supertest = require("supertest");
import { server } from "../../../server";
import { ITodoModel } from "../../../interfaces/todo.interface";
import { TodoModel } from "../../../models/todo.model";

describe('todo - controller', () => {
    let newTodo: ITodoModel;

    beforeAll(async () => {
        await TodoModel.deleteMany({});
    });

    describe('get', () => {
        test('HP', async () => {
            return supertest(server)
                .get('/api/todo')
                .expect(200);
        });
    });

    describe('post', () => {
        test('HP', async () => {
            return supertest(server)
                .post('/api/todo')
                .send({
                    title: 'title',
                    task: {
                        title: 'task.title',
                        due: Date,
                        text: 'task.text'
                    }
                })
                .expect(200)
                .then(value => {
                    const text = JSON.parse(value.text);
                    newTodo = text;
                    expect(text.title).toBe('title');
                });
        });
    });

    describe('getId', () => {
        test('HP', async () => {
            return supertest(server)
                .get(`/api/todo/${newTodo._id}`)
                .expect(200);
        });
    });

});