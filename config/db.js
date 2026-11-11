const db = require('../config/db');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully.');

    await db.sequelize.sync({ alter: true });  
    console.log

  } catch (error) {
    console.error('Database Connection Error:', err.message
        process.exit(1);
    
  } 
}

module.exports = { connectDatabase };