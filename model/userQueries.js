const findAllUsers = 'SELECT * FROM users;';
const findUserByIdQuery = 'SELECT * FROM users WHERE ID = ?';
const insertUsersQuery = 'INSERT INTO users (username) VALUES (?);';

module.exports = {
  findAllUsers,
  findUserByIdQuery,
  insertUsersQuery,
};
