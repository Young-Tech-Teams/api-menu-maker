
const ExampleController = require("./example/index.js")
const AuthController = require("./auth/index.js")
const UserProfileController = require("./auth/profile.js")

module.exports = {
  example: {
    ExampleController
  },
  auth: {
    AuthController,
    UserProfileController
  }
}
