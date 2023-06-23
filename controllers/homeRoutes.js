const router = require('express').Router();
const {User, Category} = require('../models');

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
    // res.status(200).json(users);
    

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/bets', function(req, res) {
    res.render('bets');
}) 

router.get('/buds', function(req, res) {
    res.render('buds');
}) 

router.get('/createbet', function(req, res) {
  res.render('createbet');
}) 


module.exports = router;
