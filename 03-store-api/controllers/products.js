const Product = require('../models/product');

const getAllProductsStatic = async (req, res, next) => {
  const products = await Product.find({ name: 'vase table' });
  res.status(200).json({ nbHits: products.length, products });
};

const getProducts = async (req, res, next) => {
  // We extract the properties to avoid unwanted query parameters
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProductsStatic, getProducts };
