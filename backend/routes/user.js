const express = require("express")
const zod = require("zod")
const jwt = require("jsonwebtoken")

const {User} = require("../db.js")
const JWT_SECRET = require("../config")

const router = express.Router()

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
})

router.get('/', (req, res) => {
  res.send('User route at /api/v1/user')
})

router.post('/signin', async (req, res) => {

  res.send("/api/v1/user/signin")
  const body = req.body;
  const obj = signupSchema.safeParse(req.body);

  if (!obj.success) {
    return res.json({message:"Incorrect inputs"})
  }

  const user = User.findOne({
    username: body.username
  })

  if (user._id) {
    return res.json({
      message: "User Already Exists."
    })
  }

  const dbUser = await User.create(body);
  const token = jwt.sign({
    userId: dbUser._id
  }, JWT_SECRET)

  res.json({
    message: "User created successfully.",
    token: token
  })

})

router.post('/signup', (req, res) => {
  res.send("/api/v1/user/signup")
})


module.exports = router;