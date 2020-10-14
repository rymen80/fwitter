const findAllUsers = 'SELECT * FROM users;';
const insertUsersQuery = 'INSERT INTO users (username) VALUES (?);';

module.exports = {
  findAllUsers,
  insertUsersQuery,
};
