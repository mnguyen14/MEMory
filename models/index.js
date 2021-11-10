const User = require('./User');
const Journal = require('./Journal');
const Entry = require('./Entry');


User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Journal, Entry }