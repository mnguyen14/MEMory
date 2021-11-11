const router = require('express').Router();
const { Entry } = require('../../models')

router.post('/', async (req, res) => {

    try {
        const userEntry = await Entry.create(
            {
                title: req.body.title,
                text: req.body.text,
                date: req.body.date,
                user: req.body.user_id
            }
        );

        res.status(200).json({ message: 'Your entry has posted' })

    } catch (err) {
        res.status(500).json({ message: 'Journal entry failed' });
    }

});


router.put('/:id', async (req, res) => {
    try {
        const userEntry = await Entry.update(
            {
                title: req.body.title,
                text: req.body.text,
                date: req.body.date,
                user: req.body.user_id
            },
            {
                where: {
                    id: req.params.id
                },
            }
        );

        res.status(200).json({ message: 'Your entry has updated' })
    } catch (err) {
        res.status(500).json({ message: 'Failed to update journal, try again' });
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const userEntry = await Entry.destroy(
            {
                where: {
                    id: req.params.id
                },
            }
        );
        res.status(200).json({ message: 'Your entry has updated' })
    } catch (err) {
        res.status(500).json({ message: 'Please try your delete request again' });
    }

})




module.exports = router