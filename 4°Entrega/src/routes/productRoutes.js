// routes/productRoutes.js
const { Router } = require('express');
const router = Router();

const { body } = require('express-validator');
const productController = require('../controllers/productController');
const validationMiddleware = require('../middlewares/validationMiddleware');


router.post(
    '/productos',
    [
        body('nombre').notEmpty(),
        body('descripcion').notEmpty(),
        body('precio').isFloat(),
        body('stock').isInt(),
    ],
    validationMiddleware,
    productController.createProduct
);


router.put(
    '/productos/:id',
    [
        body('nombre').optional(),
        body('descripcion').optional(),
        body('precio').optional().isFloat(),
        body('stock').optional().isInt(),
    ],
    validationMiddleware,
    productController.updateProduct
);


router.get('/productos', productController.getAllProducts);


router.get('/productos/:id', productController.getProductById);

module.exports = router;
