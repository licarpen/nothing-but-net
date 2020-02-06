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
  it('handles a get request for path "/red" by sending <h1>RED</h1> to client side', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>RED</h1>');
      });
  });
  it('handles a get request for path "/green" by sending <h1>GREEN</h1> to client side', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>GREEN</h1>');
      });
  });
  it('handles a get request for path "/periwinkle" by sending <h1>PERIWINKLE</h1> to client side', () => {
    return request(app)
      .get('/periwinkle')
      .then(res => {
        expect(res.text).toEqual('<h1>PERIWINKLE</h1>');
      });
  });
});

