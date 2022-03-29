const { User } = require('../models')

const userData = [
    {
        name: 'Donkey',
        email: "thatlldo@gmail.com",
        password: "abcd1234",
    },
    {
        name: 'FriarTuck',
        email: 'monk@gmail.com',
        password: 'abcd1234',
    },
    {
        name: 'EdEDDeddie',
        email: 'best3brothers@gmail.com',
        password: 'abcd1234',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
