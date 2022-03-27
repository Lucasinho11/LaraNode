const http = require("http");
const url = require("url")
const Db =  require("./boostrap/Db.js")
const UserController = require('./app/Controllers/UserController.js')
const routes = require('./routes/index.js')
const server = http.createServer((req, res) => {
    console.log('Serveur lancé')
    const route = new routes(req,res)
});
server.listen(3000)

