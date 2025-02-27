const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@paytm-app-cluster.8xytj.mongodb.net")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

const User = new mongoose.model("User", UserSchema)

module.exports = {
  User
}