const router = require('express').Router();
const connection = require('../../../config/connection');

// /api/users prepended to every Route
router.route('/')
  .get(((_req, res) => {
    res.send('Hello');
  }))
  .post(async (req, res) => {
    const userInput = req.body;
    const query = 'INSERT INTO  users SET ?;';
    const result = await connection.query(query, userInput);
    res.json(result);
  });

module.exports = router;
