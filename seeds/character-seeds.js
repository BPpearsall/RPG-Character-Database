const { Character } = require('../models')

const characterData = [
    {
        name: 'Blake',
    }
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;