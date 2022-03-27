const Db =  require("../../boostrap/Db.js")
module.exports = class UserRepository {
constructor(req, res) {
    this.db = new Db();
    this.req = req
    this.res = res
}
   async all() {
       const results = await this.db.client.query("SELECT id, name, email, created_at, updated_at FROM users");
       const users = results.rows;
       this.res.write(JSON.stringify(users));
       this.res.end();
   }
   async get(id) {
    const results = await this.db.client.query(`SELECT * FROM users WHERE id = ${id}`);
    const user = results.rows;
    return user
}
   async create(name, email, password){
    const text = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
    const values = [name, email, password]
    try {
        const res = await this.db.client.query(text, values)
        console.log(res.rows)
        this.res.write(JSON.stringify(res.rows));
      } catch (err) {
        console.log(err.stack)
      }
    this.res.end()
   }
   async update(id, name, email, password){
    const text = `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = ${id}`
    const values = [name, email, password]
    try {
        const res = await this.db.client.query(text, values)
        return res
      } catch (err) {
        console.log(err.stack)
      }
   }
   async delete(id){
    const text = `DELETE FROM users WHERE id = $1`
    const values = [id]
    try {
        const res = await this.db.client.query(text, values)
        return res
      } catch (err) {
        console.log(err.stack)
      }
   }
}
