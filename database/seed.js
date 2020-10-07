const db = require('./index.js');
const School = require('./School.js');
const mongoose = require('mongoose');

const sampleSchoolData = require('./dataGenerator.js');

console.log(sampleSchoolData);

const insertSampleSchoolData = () => {
  School.collection.drop();
  School.create(sampleSchoolData)
    .then(() => mongoose.disconnect());
};

insertSampleSchoolData();
