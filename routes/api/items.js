const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);
// GET /api/items/itemform
// router.get('/itemform', itemsCtrl.itemform)

module.exports = router;