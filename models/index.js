const User = require('./User')
const Character = require('./Character')
const Class = require('./Class')
const Comment = require('./Comment')

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Class.hasMany(Character, {
    foreignKey: 'class_id'
});

Character.belongsTo(Class, {
    foreignKey: 'class_id'
});

Character.hasMany(Comment, {
    foreignKey: 'character_id'
});

Comment.belongsTo(Character, {
    foreignKey: 'character_id'
}),


module.exports = {User, Character, Comment, Class}