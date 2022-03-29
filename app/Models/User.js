const Db =  require("../../boostrap/Db.js")
const db = new Db();
    function findAll() {
        let request = db.client.query("SELECT id, name, email, created_at, updated_at FROM users");
        return request;
    }
    function findById(id) {
        let request = db.client.query(`SELECT * FROM users WHERE id = ${id}`)
        return request;
    }
    
    function create(name, email, password) {
        let request = db.client.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *" , [name, email, password])
        return request;
    }
    
    function update(id, name, email, password) {
        let request = db.client.query(`UPDATE users SET name = $1, email = $2, password = $3 WHERE id = ${id}`, [name, email, password])
        return request;
    }
    
    function remove(id) {
        let request = db.client.query(`DELETE FROM users WHERE id = ${id}`)
        return request;
    }
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}
