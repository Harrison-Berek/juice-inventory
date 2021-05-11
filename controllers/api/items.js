const Item = require('../../models/item');

module.exports = {
  index,
  create, 
  update
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
  console.log(req.body);
  console.log(req.params.id);
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
  console.log(item);
  res.json(item);
}

