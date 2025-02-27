const express = require("express")

const userRouter = require("./user.js")
const accountRouter = require("./account.js")

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);

router.get('/', (req, res) => {
  res.send('Requests from /api/v1');
  res.end();
})

module.exports = router