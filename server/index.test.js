/**
 * @jest-environment node
 */

const axios = require('axios');

const server = require('./index');

const api = axios.create({ baseURL: 'http://localhost:3002' });

beforeAll(() => {
  server.start(9002);
});

afterAll(() => {
  server.close();
});

test('/schools endpoint should have status 200 and response of 5', async () => {
  const { data, status } = await api.get('/homes/5/schools');
  expect(status).toBe(200);
  expect(data).toEqual('5');
});
