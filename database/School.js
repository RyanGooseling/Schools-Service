const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const schoolSchema = new mongoose.Schema({
  property_id: Number,
  name: String, // Robert Frost Elementary School
  type: String, // public or private
  grades: String, // K to 5
  rating: {
    lowIncome: Number,
    studentGrowth: Number,
    testScores: Number,
    equity: Number,
    lastUpdated: Date,
  },
  studentCount: Number,
  distance: Number, // Can be decimal
  choiceSchool: String, // maps to "Choice school" or "Serves this home"
  address: String,
  schoolUrl: String,
  districtUrl: String,
  ratio: Number,
  reviews: [{
    score: Number,
    body: String,
    createdAt: Date,
  }],
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
