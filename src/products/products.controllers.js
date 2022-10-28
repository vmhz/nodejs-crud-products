
const Products = require('../models/products.models')


const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    })
    return data
}

const createProduct = async (data) => {
    const response = await Products.create({
        ...{
            id,
            name,
            category,
            price,
            isAvailable,
        } = data
    })
    return response
}
const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id
        }
    });
    return response;
};

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data
}



module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct

}

