const { Class } = require('../models')

const classData = [
    {
        name: 'Angel',
        alignment: "Good",
    }
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;


