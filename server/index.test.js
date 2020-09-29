/**
 * @jest-environment node
*/

const axios = require('axios');

const server = require('./index');

const api = axios.create({ baseURL: 'http://localhost:9002' });

beforeAll(() => {
  server.start(9002);
});

afterAll(() => {
  server.close();
});

test('/schools endpoint should have status 200 and response of 3 items', (done) => {
  api.get('/homes/5/schools')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.data.length).toEqual(3);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

test('/schools endpoint should return an array', (done) => {
  api.get('/homes/5/schools')
    .then((res) => {
      expect(Array.isArray(res.data)).toBe(true);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

test('/schools endpoint should return an array of items in order of shortest distance', (done) => {
  api.get('/homes/5/schools')
    .then((res) => {
      expect(res.data[0].distance).toBeLessThanOrEqual(res.data[1].distance);
      expect(res.data[1].distance).toBeLessThanOrEqual(res.data[2].distance);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

// test('/schools endpoint should return an array', (done) => {
//   return api.get('/homes/5/schools')
//     .then((res) => {
//       console.log(res.data);
//       console.log(Array.isArray(res.data));
//       expect(Array.isArray(res.data)).toBe(true);
//       done();
//     });
// });
