const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');

User.hasMany(Category, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Category.hasMany(Product, {
    foreignKey: 'category_name',
    onDelete: 'CASCADE'
});

module.exports = { User, Category, Product };
