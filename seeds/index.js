const seedCharacters = require('./character-seeds');
const seedClass = require('./class-seeds');
const seedComment = require('./comment-seeds');
const seedUser = require('./user-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ------\n');
    await seedClass();
    console.log('\n----- CLASS SEEDED -----\n');
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
    await seedCharacters();
    console.log('\n----- CHARACTERS SEEDED -----\n');
    await seedComment();
    console.log('\n----- COMMENT SEEDED -----\n');

    process.exit(0);
}

seedAll();

