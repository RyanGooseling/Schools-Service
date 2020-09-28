const schoolsController = {};

schoolsController.get = (req, res) => {
  console.log('GET controller accessed');
  console.log(req.params.id);
  res.end();
};

module.exports = schoolsController;
