const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// POST /api/items
router.post('/', itemsCtrl.create);
// PUT /api/items
router.put('/:id', itemsCtrl.update);

module.exports = router;