const { Character } = require('../models')

const characterData = [
    {
        name: 'Blake',
        damage: 100,
        health: 100,
        background: 'swamps friends with donkey',
        race: 'ogre',
        class_id: 1,
        user_id: 1,
    }
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;