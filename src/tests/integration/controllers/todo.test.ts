import supertest = require("supertest");
import { server } from "../../../server";
import { ITodoModel } from "../../../interfaces/todo.interface";
import { TodoModel } from "../../../models/todo.model";

describe('todo - controller', () => {
    let newTodo: ITodoModel;

    function createTodo() {
        newTodo = new TodoModel({ title: 'todo' });
        return newTodo.save();
    }

    describe('get', () => {
        test('HP', async () => {
            createTodo();
            return supertest(server)
                .get('/api/todo')
                .expect(200);
        });
    });

    describe('getId', () => {
        test('HP', async () => {
            return supertest(server)
                .get(`/api/todo/${newTodo.id}`)
                .expect(200);
        });
    });

    describe('post', () => {
        test('HP', async () => {
            return supertest(server)
                .post('/api/todo')
                .send({ title: 'title' })
                .expect(200)
                .then(value => {
                    const text = JSON.parse(value.text);
                    newTodo = text;
                    expect(text.title).toBe('title');
                });
        });
    });

    describe('putIdTask', () => {
        test('HP', async () => {
            return supertest(server)
                .put(`/api/todo/${newTodo.id}`)
                .send({ title: 'title chubaca' })
                .expect(200)
                .then(value => {
                    const text = JSON.parse(value.text);
                    expect(text.title).toBe('title chubaca');
                });
        });
    });

    describe('delteId', () => {
        test('HP', async () => {
            return supertest(server)
                .delete(`/api/todo/${newTodo.id}`)
                .expect(200);
        });
    });
});