const { Comment } = require('../models')

const commentData = [
    {
        body: 'Very Nice',
        character_id: 1,
        user_id: 2,
    },
    {
        body:"Good Test # 2",
        character_id: 1,
        user_id: 2,
    },
    {
        body: 'Awful luck with the hand.',
        character_id: 2,
        user_id: 3,
    },
    {
        body: 'Good stuff.',
        character_id: 3,
        user_id: 2,
    },
    {
        body: 'Very cute and scary little rabbit.',
        character_id: 4,
        user_id: 3,
    },
    {
        body: 'Does he have friends that are a rabbit, a pig, and a bear who loves honey?',
        character_id: 5,
        user_id: 1,
    },
    {
        body: 'A FRIENDLY GHOST!?',
        character_id: 6,
        user_id: 3,
    },
    {
        body: 'Super sailor.',
        character_id: 7,
        user_id: 3,
    },
    {
        body: 'So mean!',
        character_id: 8,
        user_id: 1,
    },
    {
        body: 'Really good character!',
        character_id: 9,
        user_id: 2,
    },
    {
        body: 'Does he juggle?',
        character_id: 10,
        user_id: 1,
    },
    {
        body: 'Does he have the machine gun blues?',
        character_id: 11,
        user_id: 2,
    },
    {
        body: 'Does he love to sing the DOOM song?',
        character_id: 12,
        user_id: 1,
    },
    {
        body: 'Very Nice!',
        character_id: 12,
        user_id: 2,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
