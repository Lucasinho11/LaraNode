const { Client } = require('pg')
const {dbUser, dbHost, dbName, dbPassword, dbPort} = require('../config/app.js')
module.exports = class Db {
    constructor() {
      this.client = new Client({
        user: dbUser,
        host: dbHost,
        database: dbName,
        password: dbPassword,
        port: dbPort,
      });
      this.client.connect()
      console.log('db connected')
    }
}
