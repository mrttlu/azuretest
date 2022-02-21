const app = require('../src/app');
const request = require('supertest');

describe('GET /', () => {
  it('responds with status 200',async () => {
    const response = request(app)
      .get('/')
      .expect(200);
    console.log(response);
  });
});