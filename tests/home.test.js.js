const app = require('../src/app');
const request = require('supertest');

describe('GET /home', () => {
  it('responds with status 200',async () => {
    request(app)
      .get('/home')
      .expect(200);
  });
});