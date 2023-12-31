const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log('req body' , req.body);
        const userData = await User.create(req.body);
        console.log('before', req.session);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
            console.log('after', req.session);
          });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const userData = await User.findOne({ where: { username: req.body.username }});

        if(!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again '});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword)  {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true,
            console.log('logged in line 49');

            res.json({ user: userData, message: 'You are now logged in'});
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      console.log('logged out');
    } else {
      res.status(404).end();
    }
  });

module.exports = router;