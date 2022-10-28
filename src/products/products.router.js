
const router = require('express').Router()
const passport = require('passport')

const productServices = require('./products.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(productServices.getAllProducts)
    .post(productServices.createProduct)


router.route('/:id')
    .get(productServices.getProductById)
    .patch(productServices.editProductById)
    .delete(productServices.deleteProductById)


module.exports = router