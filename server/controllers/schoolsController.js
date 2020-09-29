const schoolModel = require('../../database/School.js');

const schoolsController = {};

schoolsController.get = (req, res) => {
  console.log('in the controller');

  schoolModel.find({ property_id: Number(req.params.id) }).sort({ distance: 1 }).limit(3)
    .then((schools) => {
      console.log('in the then');
      // console.log(schools);
      res.json(schools);
    })
    .catch((err) => {
      console.log('error');
      console.log(err);
    });

  // res.json(req.params.id);
  // res.end();
};

module.exports = schoolsController;
