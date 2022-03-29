const User = require('./User')
const Character = require('./Character')
const Class = require('./Class')
const Stats = require('./Stats')
const Comment = require('./Comment')

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Character.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = {User, Character}