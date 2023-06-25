const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");

User.hasMany(Category, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Category.belongsTo(User, {
  foreignKey: "user_id",
})

Category.hasMany(Product, {
    foreignKey: 'category_name',
    onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: "category_name",
});



module.exports = { User, Category, Product };
