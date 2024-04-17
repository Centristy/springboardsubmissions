const request = require('supertest');
const app = require('./app');


describe('GET /items', () => {
    test('It should respond with an array of shopping list items', async () => {
        const response = await request(app).get('/items');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('POST /items', () => {
    test('It should create a new item in the shopping list', async () => {
        const newItem = { item: 'Oranges', price: 3.50 };
        const response = await request(app)
            .post('/items')
            .send(newItem);
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject({Added: newItem});
    });
});

describe('PATCH /items/:name', () => {
    test('It should update an existing item in the shopping list', async () => {
        const updatedItem = { item: 'Apples', price: 4.00 };
        const response = await request(app)
            .patch('/items/Apples')
            .send(updatedItem);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({Updated: updatedItem});
    });

    test('It should return 404 if item is not found', async () => {
        const response = await request(app)
            .patch('/items/nothing')
            .send({ item: 'Nonexistent item', price: 40.00 });
        expect(response.statusCode).toBe(404);
    });
});


    test('It should delete an existing item from the shopping list', async () => {
        
        const response = await request(app).delete("/items/Apples");
        expect(response.statusCode).toBe(204);
    });

    test('It should return 404 if item is not found', async () => {
        const response = await request(app).delete('/items/Apples');
        expect(response.statusCode).toBe(404);
    });



