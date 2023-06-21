const User = require('./User');
const Category = require('./Category');

User.hasMany(Category, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Category };
