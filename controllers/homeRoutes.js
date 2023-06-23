const router = require("express").Router();
const { User, Category } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_name"],
        },
      ],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
