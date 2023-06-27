const sequelize = require("../config/connection");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");

const userData = require("./userData.json");
const categoryData = require("./categoryData.json");
const productData = require("./productData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
  await Product.bulkCreate(betData);

  process.exit(0);
};

seedDatabase();
