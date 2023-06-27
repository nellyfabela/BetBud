const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const betRoutes = require('./betRoutes');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/bet', betRoutes);

module.exports = router;