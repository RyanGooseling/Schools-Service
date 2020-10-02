const express = require('express');
const path = require('path');

const schoolsRouter = require('./routers/schools.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
// app.use('/homes/:id/schools', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/homes', schoolsRouter);

let server;

const start = (PORT) => {
  server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

const close = server ? server.close : () => {};

start(3002);

module.exports = {
  start,
  close,
};
