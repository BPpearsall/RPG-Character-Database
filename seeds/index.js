const seedCharacters = require('./character-seeds');

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ------\n');
    await seedCharacters();
    console.log('\n----- CHARACTERS SEEDED -----\n')
}