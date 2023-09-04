/**
 * Import Sequelize.
 */
const Sequelize = require("sequelize");
const dbConfig = require("./db.config.js");

/**
 * Create a Sequelize instance. This can be done by passing
 * the connection parameters separately to the Sequelize constructor.
 */
// const sequelize = new Sequelize('nodedb', 'ansaf', 'ansaf', {
//    host: '34.69.20.200',
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
   host: dbConfig.HOST,
   dialect: dbConfig.dialect,
});

/**
 * Export the Sequelize instance. This instance can now be
 * used in the index.js file to authenticate and establish a database connection.
 */
module.exports = sequelize;
