const router = require('express').Router();
const { User, Category } = require('../models');
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

router.get('/profile', withAuth, async (req, res) => {
    try {
        res.render('profile');
    } catch (err) {
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


module.exports = router;

