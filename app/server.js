// Dependencies
const express = require("express")

// Core


/**
 * Server
 */
module.exports = class Server {
  constructor() {
    this.app = express()
    this.run()
  }

  /**
   * Middleware
   */
  middleware() {
    
  }

  /**
   * Routes
   */
  routes() {

    // If route not exist
    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: "Not Found"
      })
    })
  }

  /**
   * Security
   */
  security() {

  }

  /**
   * Run
   */
  run() {
    try {
      this.security()
      this.middleware()
      this.routes()
      const port = process.env.PORT || 4000
      this.app.listen(port)
      console.log(`Your port is ${port}`)
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`)
    }
  }
}
