const { Sequelize } = require('sequelize');
const logger = require('../utils/logger');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'atmos_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: (msg) => logger.debug(msg),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

/**
 * Test database connection
 */
async function testConnection() {
  try {
    await sequelize.authenticate();
    logger.info('✅ Database connection established successfully');
    return true;
  } catch (error) {
    logger.error('❌ Unable to connect to database:', error);
    return false;
  }
}

/**
 * Sync database models
 */
async function syncDatabase(force = false) {
  try {
    await sequelize.sync({ force });
    logger.info(`✅ Database synchronized ${force ? '(force)' : ''}`);
  } catch (error) {
    logger.error('❌ Database sync error:', error);
    throw error;
  }
}

module.exports = {
  sequelize,
  testConnection,
  syncDatabase
};
