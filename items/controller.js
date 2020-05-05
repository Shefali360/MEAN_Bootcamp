const item = require('./service');

module.exports.create = async (req, res) => {
  try {
  const response = await item.create(req.body);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getAll = async (req, res) => {
  try {
  const response = await item.getAll();
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateById = async (req, res) => {
  try{
  const response = await item.updateById(req.params,req.body);
  res.send(response);
} catch (err) {
  res.status(500).send(err);
  }
};


module.exports.delete = async (req, res) => {
  try{
  const response = await item.delete(req.params);
  res.send(response);
} catch (err) {
  res.status(500).send(err);
  }
};