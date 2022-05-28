
const ExampleController = require("./example/index.js")
const AuthController = require("./auth/index.js")

module.exports = {
  example: {
    ExampleController
  },
  auth: {
    AuthController
  }
}
