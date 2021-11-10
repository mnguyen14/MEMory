const { Entry } = require('../models');

const entryData = [
    {
        title: "This Project is Hard",
        text: "This project is hard and it requires a lot of teamwork.",
        user_id: 1,
    },
    {
        title: "First Journal Entry",
        text: "This is my first journal entry.",
        user_id: 2,
    },
    {
        title: "Day One Entry",
        text: "This is an entry on day one of the project.",
        user_id: 3,
    }
];

const seedEntry = () => Entry.bulkCreate(entryData);

module.exports = seedEntry;