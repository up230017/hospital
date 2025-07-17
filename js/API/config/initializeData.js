const bcrypt = require('bcryptjs');
const User = require('../user/userModel');
const databaseErrorHandler = require('../middlewares/databaseErrorHandler');

const initializeData = async (app) => {
  try {
    // Check if there are any users in the database
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      // No users found, create default users
      const defaultUsers = [
        {
          name: 'admin',
          email: 'admin@crm.com',
          password: await bcrypt.hash('adminpassword', 10),
          role: 'admin'
        },
        {
          name: 'commonUser',
          email: 'common@crm.com',
          password: await bcrypt.hash('commonpassword', 10),
        },
        // Add more default users as needed
      ];

      await User.insertMany(defaultUsers);
      console.log('Default users created');
    } else {
      console.log('Users already exist in the database');
    }

  } catch (error) {
    console.error('Error initializing data:', error);
    app.use((req, res, next) => databaseErrorHandler(error, req, res, next));
    process.exit(1);
  }
};

module.exports = initializeData;