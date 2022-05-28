// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const { requiresAuth } = require('express-openid-connect');

// const papa = require("papaparse")
// const ftp = require("basic-ftp")
// var nodemailer = require('nodemailer');
// const dotenv = require('dotenv')
// const client = new ftp.Client()
// client.ftp.verbose = false
// dotenv.config()

module.exports = class UserProfileController {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        try {
            this.profile()
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    async profile() {
        this.app.get('/profile', requiresAuth(), (req, res) => {
            res.send(JSON.stringify(req.oidc.user));
        });

    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
