const uuid = require('uuid')
const productsControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}


const createProduct = (req, res) => {
    const { name, category, price, isAvailable } = req.body
    if (name, category, price, isAvailable) {
        productsControllers.createProduct({
            id: uuid.v4(),
            name, category, price, isAvailable
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                category: 'string',
                price: 'integer',
                isAvailable: 'bool'
            }
        })
    }

}

const getProductById = (req, res) => {
    const { id } = req.params
    productsControllers.getProductById(id)
        .then(data => {
            if (data)
                res.status(200).json(data)
            else
                res.status(404).json({ message: 'not found' })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })


}

const editProductById = (req, res) => {
    const { id } = req.params
    const { name, category, price, isAvailable } = req.body
    if (name, category, price, isAvailable) {
        productsControllers.editProduct(id, {
            name, category, price, isAvailable
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                category: 'string',
                price: 'integer',
                isAvailable: 'bool'
            }
        })
    }
}
const deleteProductById = (req, res) => {
    const { id } = req.params
    if (name, category, price, isAvailable) {
        productsControllers.deleteProduct(id)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Error id product not found',
        })
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    editProductById,
    deleteProductById
}
