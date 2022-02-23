
const app = require('../src/app');
const request = require('supertest');

describe('GET /ping', () => {
  it('responds with json',async () => {
    request(app)
      .get('/info')
      .set('Accept', 'application/json')
      .expect(200);
  });
});