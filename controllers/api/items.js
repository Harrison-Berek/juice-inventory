const Item = require('../../models/item');

module.exports = {
  index,
  create, 
  update,
  delete: deleteItem
};

async function index(req, res) {
  const items = await Item.find({}).populate('category').exec();
  res.json(items);
}

async function create(req, res) {
  console.log(req.body);
  const created = await Item.create(req.body);
  const item = await Item.findById(created._id).populate('category').exec();
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



