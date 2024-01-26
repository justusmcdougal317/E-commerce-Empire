const express = require('express');
const router = express.Router();

const categoryRoutes = require('./category-routes'); // Adjust the path accordingly
const productRoutes = require('./product-routes'); // Adjust the path accordingly
const tagRoutes = require('./tag-routes'); // Adjust the path accordingly

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;