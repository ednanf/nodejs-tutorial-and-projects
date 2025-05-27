const getAllProductsStatic = async (req, res, next) => {
  res.status(200).json({ data: 'products testing route' });
};

const getProducts = async (req, res, next) => {
  res.status(200).json({ data: 'products route' });
};

module.exports = { getAllProductsStatic, getProducts };
