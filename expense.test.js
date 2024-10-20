const request = require('supertest');
const app = require('../src/index');

describe('Expense API', () => {
    it('should add a new expense', async () => {
        const res = await request(app)
            .post('/api/expenses')
            .send({
                amount: 3000,
                splitMethod: 'equal',
                participants: [{ userId: 'someUser Id', amountOwed: 1000 }]
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('amount', 3000);
    });
});
