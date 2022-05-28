// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const { auth } = require('express-openid-connect');
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:4000',
    clientID: '14okauX9UmvpAKYtHQZPCiESuie5LOQd',
    issuerBaseURL: 'https://dev-960vw2fg.eu.auth0.com'
};

module.exports = class AuthController {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        try {
            this.connectToAuth0()
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    async connectToAuth0() {
            // auth router attaches /login, /logout, and /callback routes to the baseURL
            this.app.use(auth(config));

            // req.isAuthenticated is provided from the auth router
            this.app.get('/', (req, res) => {
                res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
            });
    }

    async connectToDb() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
