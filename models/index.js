const User = require('./User');
const Journal = require('./Journal');
const Entry = require('./Entry');

Journal.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Journal.hasMany(Entry, {
    foreignKey: 'journal_id'
});

Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

Entry.belongsTo(Journal, {
    foreignKey: 'journal_id'
});

module.exports = { User, Journal, Entry }