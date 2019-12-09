const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles a get request for path "/" by sending "hi" to client side', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('Hi');
      });
  });
});

