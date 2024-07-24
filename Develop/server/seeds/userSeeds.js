const db = require('../config/connection');
const User = require('../models/User');

db.once('open', async () => {
  try {
    const users = [
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1'
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2'
      },
      // Add more users as needed
    ];
    
    await User.create(users);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
