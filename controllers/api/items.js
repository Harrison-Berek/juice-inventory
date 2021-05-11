const Item = require('../../models/item');

module.exports = {
  index,
  create, 
  update,
  delete: deleteItem
};

async function index(req, res) {
  const items = await Item.find({});
  res.json(items);
}

async function create(req, res) {
  const item = await Item.create(req.body);
  res.json(item);
}

async function update(req,res) {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(item);
}

async function deleteItem(req, res) {
  const item = await Item.findByIdAndDelete(req.params.id)
  res.json(item);
}



