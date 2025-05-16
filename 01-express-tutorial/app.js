const express = require('express');

const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product; // destructure product to retrieve only what is needed
    return { id, name, image };
  });
  res.status(200).json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params; // extracting the :productId from params
  const singleProduct = products.find(
    (product) => product.id === Number(productId),
  );
  if (!singleProduct) {
    return res.status(404).send('<h1>404 - Product does not exist!</h1>');
  }
  res.status(200).json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search!');
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(8000, () => {
  console.log('Server is listening on localhost:8000');
});
