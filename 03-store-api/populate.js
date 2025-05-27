require('@dotenvx/dotenvx').config();

const connectDB = require('./util/connect.js');
const Product = require('./models/product');
const products = require('./products.json');

/**
 * Asynchronously connects to the MongoDB database, clears the Product collection,
 * populates it with new products, and exits the process.
 * Logs a success message on completion or an error message on failure.
 *
 * @async
 * @function start
 * @returns {Promise<void>} Resolves when the database has been populated and the process exits.
 */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log('Successfuly populated the database!');
    process.exit(0);
  } catch (error) {
    console.error(`[system] ${error.message}`);
    process.exit(1);
  }
};

start();
