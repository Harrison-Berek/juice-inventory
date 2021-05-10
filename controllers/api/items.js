const Item = require('../../models/item');

module.exports = {
  index,
  show,
  create
};

async function index(req, res) {
  const items = await Item.find({});
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}

async function create(req, res) {
  const item = await Item.create(req.body);
  res.json(item);
}