const sequelize = require('../config/connection');
const userData = require('./UserModelData');
const entryData = require('./entryData');

const seedDb = async() => {
    await sequelize.sync({ force: true });
    await userData();
    await entryData();
    process.exit(0);
}

seedDb();