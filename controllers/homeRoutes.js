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
    console.log(users); //to check the content of the object
    res.render('home'); //test for logged in user
    // res.status(200).json(users);
 
    

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup')
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/bets', function(req, res) {
  res.render('bets');
}) 

router.get('/buds', function(req, res) {
  res.render('buds');
}) 

router.get('/createbet', function(req, res) {
  res.render('createbet');
}) 

router.get('/logout', (req, res) => {
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

router.get('/home', function(req, res) {
  res.render('home');
})

router.get('/signup', function(req, res) {
  res.render('signup');
})

module.exports = router;


