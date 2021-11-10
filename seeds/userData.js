const { User } = require('../models');

const userData = [
    {
        name: 'Matthew',
        email: 'test@test.com',
        password: 'password123',
    },
    {
        name: 'Edward',
        email: 'test2@test.com',
        password: 'password456',
    },
    {
        name: 'Mariana',
        email: 'test3@test.com',
        password: 'password789',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;