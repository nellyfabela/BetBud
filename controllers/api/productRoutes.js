const router = require("express").Router();
const { User, Category, Product } = require("../../models");
const withAuth = require("../../utils/auth");

// get products for homepage
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_name"],
        },
      ],
    });

    const products = productData.map((product) => product.get({ plain: true }));
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post a new authenticated product
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create({
      product_name: req.body.product_name,
      category_name: req.body.category_name,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a product
router.delete("/:id", async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
