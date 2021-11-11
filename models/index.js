const User = require('./UserModel');
const Entry = require('./Entry');


User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Entry }