const router = require("express").Router();
const { User } = require("../../models");

// POST /api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;