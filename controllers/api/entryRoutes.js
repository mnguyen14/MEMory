const router = require('express').Router();
const { Entry } = require('../../models')

router.post('/entry', async (req, res) => {

    try {
        const userEntry = await Entry.create({
            title: req.body.title,
            text: req.body.text,
            date: req.body.date,
            user: req.body.user_id
        });
        
    } catch (err) {
        res.status(500).json({ message: 'Journal entry failed' });
    }

});

module.exports = router