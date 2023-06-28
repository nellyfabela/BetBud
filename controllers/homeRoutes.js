const router = require('express').Router();
const { User, Bet } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        res.render('home')
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
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO - add withAuth to this route router.get('/profile', withAuth, async (req, res) => {
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Bet }],
        });

        // const betData = await Bet.findOne({ where: { user_id: req.session.user_id } });
        // const bet = betData.get({ plain: true });

        console.log(userData);

        const user = userData.get({ plain: true });

        res.render('profile', {user});

        // res.status(200).json({userData});
    }
        catch (err) {
        res.status(500).json(err);
    }
});

router.get('/createbet', withAuth, async (req, res) => {
    try {
        res.render('createbet');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/buds', async (req, res) => {
    try {
        res.render('buds');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/editprofile', async (req, res) => {
    try {
        res.render('editprofile');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/homepage', (req, res) => {
    try {
        console.log(logged_in);
        res.render('homepage');

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;

