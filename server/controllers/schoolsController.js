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

module.exports = schoolsController;
