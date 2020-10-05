const schoolModel = require('../../database/School.js');

const schoolsController = {};

schoolsController.get = (req, res) => {
  schoolModel.find({ property_id: Number(req.params.id) }).sort({ distance: 1 }).limit(3)
    .then((schools) => {
      res.json(schools);
    })
    .catch((err) => {
      console.log('error');
      res.json(err);
    });
};

schoolsController.post = (req, res) => {
  console.log(`triggered POST controller ${req.body.id}`);
  schoolModel.findOneAndUpdate(
    { _id: req.body.id },
    { $push: { reviews: { score: Number(req.body.score), body: req.body.body, createdAt: new Date().toISOString() } } },
  )
    .then(() => {
      console.log('Successfully added review');
      res.end();
    })
    .catch((err) => {
      console.log(`Error creating new review:`)
      console.log(err);
    });
};

module.exports = schoolsController;
