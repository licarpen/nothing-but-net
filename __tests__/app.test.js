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
  it('handles a POST request for path "/echo" by sending status 200 and plain text with request body', () => {
    return request(app)
      .post('/echo')
      .send('Hello!')
      .then(res => {
        expect(res.request._data).toEqual('Hello!');
      });
  });
});

