const router = require('express').Router();
const { Entry, User } = require('../../models')

router.get('/', async (req, res) => {
    Entry.findAll({
        attributes: [
            'id',
            'title',
            'text',
            'date',
        ]
    })
    .then(entryData => res.json(entryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
    Entry.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'text',
            'date',
        ]
    })
    .then(entryData => res.json(entryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Entry.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.user_id
    })
    .then(entryData => res.json(entryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', async (req, res) => {
    try {
        const userEntry = await Entry.destroy(
            {
                where: {
                    id: req.params.id
                },
            }
        );
        res.status(200).json({ message: 'Your entry has deleted' })
    } catch (err) {
        res.status(500).json({ message: 'Please try your delete request again' });
    }

})

module.exports = router