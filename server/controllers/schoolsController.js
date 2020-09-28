const schoolsController = {};

schoolsController.get = (req, res) => {
  console.log('GET controller accessed');
  res.json(req.params.id);
  res.end();
};

module.exports = schoolsController;
