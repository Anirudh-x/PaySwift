const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Account at /api/v1/account');
})

module.exports = router;