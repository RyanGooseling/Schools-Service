const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/bluefin-schools';

const db = mongoose.connect(mongoUri);

module.exports = db;
