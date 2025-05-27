const express = require('express');

const {
  getAllProductsStatic,
  getProducts,
} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
