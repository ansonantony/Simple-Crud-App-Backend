const express = require('express')
const router = express.Router();
const getProductsController = require('../controllers/getproductsController')
const getProductController = require('../controllers/getproductController')
const updateProductController = require('../controllers/updateproductController')
const deleteProductController = require('../controllers/deleteproductController')
const addProductController = require('../controllers/addproductController');


router.get('/',getProductsController);
router.post('/',addProductController);
router.get('/:id',getProductController);
router.put('/:id',updateProductController);
router.delete('/:id',deleteProductController);

module.exports = router