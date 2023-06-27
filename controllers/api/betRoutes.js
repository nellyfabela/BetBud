const router = require('express').Router();
const { Bet, User } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const betData = await Bet.findAll({
            include: [{
                model: User
            }]
        });
        res.status(200).json(betData);
    } catch (err) {
        res.status(200).json(err);
    }
});  

router.post("/", async (req, res) => {
    try {
        const betData = await Bet.create({
            ...req.body, 
            user_id: req.session.user_id
        });

        // const betData = await Bet.create(req.body);
        // res.status(200).json(betData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;