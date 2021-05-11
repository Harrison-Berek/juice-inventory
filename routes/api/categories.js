const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

// GET /api/items
router.get('/', categoriesCtrl.index);
// POST /api/items
// router.post('/', categoriesCtrl.create);
// // PUT /api/items
// router.put('/:id', categoriesCtrl.update);
// // DELETE /api/items
// router.delete('/:id', categoriesCtrl.delete);

module.exports = router;