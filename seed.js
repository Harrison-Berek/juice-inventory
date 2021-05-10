require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

//   await Category.deleteMany({});
//   const categories = await Category.create([
//     {name: 'Sandwiches', sortOrder: 10},
//     {name: 'Seafood', sortOrder: 20},
//     {name: 'Mexican', sortOrder: 30},
//     {name: 'Italian', sortOrder: 40},
//     {name: 'Sides', sortOrder: 50},
//     {name: 'Desserts', sortOrder: 60},
//     {name: 'Drinks', sortOrder: 70},
//   ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Evolucio Blaufrankisch', description: 'Austrian Red', price: 12.00, cost: 8.00, sku: '875359003527', qty: 12},
    {name: 'Evolucio Furmint', description: 'Austrian White', price: 12.00, cost: 7.33, sku: '875359002537', qty: 8},
    {name: 'Pinyolet Garnacha', description: 'Spanish Red', price: 17.00, cost: 10.50, sku: '8437008409276', qty: 12},
  ]);

  console.log(items)

  process.exit();

})();