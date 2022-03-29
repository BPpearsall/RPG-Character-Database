const { Class } = require('../models')

const classData = [
    {
        name: 'Angel',
        alignment: "Good",
    },
    {
        name: 'Warrior',
        alignment: "Neutral",
    },
    {
        name: "Archer",
        alignment: 'Chaotic Good',
    },
    {
        name: "Vampire Bunny",
        alignment: "Chaotic Nuetral",
    },
    {
        name: "Brute",
        alignment: "Chaotic Evil",
    },
    {
        name: "Alien Invader",
        alignment: "Evil",
    },
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;


