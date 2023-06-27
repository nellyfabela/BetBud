const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_username = userData.username;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;