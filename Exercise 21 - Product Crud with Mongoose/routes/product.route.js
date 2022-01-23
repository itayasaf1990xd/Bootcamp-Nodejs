const express = require('express');
const apiRouter = express.Router();
const { addProducts, getProductByName,	getActiveProducts, getProductsByMinMaxPrice,	deleteProduct,	deleteAllProducts,	updatedProduct } = require('../controllers/product.controller');

apiRouter.post('/create', addProducts);
apiRouter.get('', getProductByName);
apiRouter.get('/active', getActiveProducts);
apiRouter.get('/price-range', getProductsByMinMaxPrice);
apiRouter.put('/update', updatedProduct);
apiRouter.delete('/delete-one', deleteProduct);
apiRouter.delete('/delete-all', deleteAllProducts);

module.exports = apiRouter;
