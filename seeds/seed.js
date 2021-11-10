const sequelize = require('../config/connection');
const userData = require('./userData.json');
const entryData = require('./entryData.json');

const seedDb = async() => {
    await sequelize.sync({ force: true });
    await userData();
    await entryData();
    process.exit(0);
}

seedDb();