const { findAllUsers, insertUsersQuery } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUsersQuery, username);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};
