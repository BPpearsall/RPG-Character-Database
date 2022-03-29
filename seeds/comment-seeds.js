const { Comment } = require('../models')

const commentData = [
    {
        body: 'Very Nice',
        character_id: 1,
        user_id: 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
