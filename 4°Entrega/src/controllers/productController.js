
const { validationResult } = require('express-validator');
const Product = require('../models/productModel');

// a. Crear un producto
createProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const producto = await Product.create(req.body);
        res.json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

// b. Actualizar un producto
updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const producto = await Product.findByPk(req.params.id);
        if (producto) {
            await producto.update(req.body);
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

// c. Buscar todos los productos
getAllProducts = async (req, res) => {
    try {
        const productos = await Product.findAll();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar productos' });
    }
};

// d. Buscar producto por Id
getProductById = async (req, res) => {
    try {
        const producto = await Product.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar el producto' });
    }
};

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    getProductById,
}
