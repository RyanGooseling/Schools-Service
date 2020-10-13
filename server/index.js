const express = require('express');
const path = require('path');
const cors = require('cors');

const schoolsRouter = require('./routers/schools.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/homes/:id/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/homes', schoolsRouter);
app.use('/bundle.js', express.static(path.join(__dirname, '..', 'client', 'dist', 'bundle.js')));
app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'dist', 'assets')));

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
