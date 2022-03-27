const Db =  require("../../boostrap/Db.js")
const db = new Db();
const results = db.client.query("SELECT * FROM users");
const users = results.rows;
    function findAll() {
        return new Promise((resolve, reject) => {
            resolve(users)
            console.log(resolve(users))
        })
    }

module.exports = {
    findAll,
}
