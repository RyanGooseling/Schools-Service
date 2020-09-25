const express = require('express');
const path = require('path');
const schoolsRouter = require('./routers/schools.js');

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/api', schoolsRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
