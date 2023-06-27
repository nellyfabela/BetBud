const Category = require("./Category");
const User = require("./User");
const Product = require("./Product");
const Bet = require('./Bet');


User.hasMany(Bet, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Bet.belongsTo(User, {
  foreignKey: "user_id"
});



module.exports = { User, Category, Product, Bet };
