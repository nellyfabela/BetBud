const router = require('express').Router();
const {User, Category} = require('../models');
const { findAll, findByPk } = require('../models/User');

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

router.get('/login', (req, res) => {
  if(req.session.logged_in){
    req.session.destroy(() => {
      res.status(204).end();
    })
  }else{
    res.status(404).end();
  }
})

router.get('/profile', async (req, res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      attributes:{exclude: ["password"]}, 
      include: [{model: Category}]
  });
    const user = userData.get({plain: true})
    res.status(200).json(user)

  }catch (err){ 
    res.status(500).json(err)
  }

})

module.exports = router;
