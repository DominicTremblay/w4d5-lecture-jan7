const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);

const res = { cookie: { user_id: 2 } };

knex
  .select('*')
  .from('users')
  .where('id', res.cookie.user_id)
  .then(user => {
    console.log(user);
    if (user.length === 0) {
      console.log('no user returned');
    } else {
      console.log('returning id');
      return user[0].id;
    }
  })
  .then(userId => {
    console.log(userId);
    console.log('user with id: ', userId, 'is logged in');
  })
  .catch(err => {
    console('error', err);
  })
  .finally(() => {
    knex.destroy();
  });
