const dotenv = require('dotenv').config()
const {DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT} = process.env
    const dbUser = DB_USER;
    const dbHost = DB_HOST;
    const dbName = DB_NAME;
    const dbPassword = DB_PASSWORD;
    const dbPort = DB_PORT;
module.exports = {
    dbUser,
    dbHost,
    dbName,
    dbPassword,
    dbPort
}
