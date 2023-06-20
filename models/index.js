const User = require('./User');
const Category = require('./Category');

Category.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Category };
