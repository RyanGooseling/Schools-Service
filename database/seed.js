const db = require('./index.js');
const School = require('./School.js');

const sampleSchoolData = require('./dataGenerator.js');

console.log(sampleSchoolData);

const insertSampleSchoolData = () => {
  School.create(sampleSchoolData)
    .then(() => db.disconnect());
};

insertSampleSchoolData();
