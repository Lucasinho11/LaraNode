const Db =  require("../../boostrap/Db.js")
const UserRepository = require("../Repository/UserRepository.js")

module.exports = class UserController {
constructor(req, res) {
    this.db = new Db();
    this.req = req
    this.res = res
}
   async getAll() {
        const users = new UserRepository(this.req, this.res);
       const results = await users.all();
       return results;
   }
   async get(id) {
   const users = new UserRepository(this.req, this.res);
   const results = await users.get(id);
   if(results.length == 0){
      this.res.writeHead(404, { "Content-type": "text/plain" })
      this.res.write('user not found with id:'+ id);
      this.res.end();
   }
   else{
      this.res.write(JSON.stringify(results));
      this.res.end();
      return results;
   }
   
}
   async post(name, email, password){
    const users = new UserRepository(this.req, this.res);
    const results = await users.create(name, email, password);
    return results;
   }
   async update(id, name, email, password){
    const users = new UserRepository(this.req, this.res);
    const results = await users.update(id, name, email, password);
    if(results.rowCount == 0){
      this.res.writeHead(404, { "Content-type": "text/plain" })
      this.res.write('user not found with id:'+ id);
      this.res.end();
   }
   else{
      this.res.writeHead(200, { "Content-type": "text/plain" })
      this.res.write('user updated');
      this.res.end();
      return results;
   }
   }
   async delete(id){
    const users = new UserRepository(this.req, this.res);
    const results = await users.delete(id);
    if(results.rowCount == 0){
      this.res.writeHead(404, { "Content-type": "text/plain" })
      this.res.write('user not found with id:'+ id);
      this.res.end();
   }
   else{
      this.res.writeHead(200, { "Content-type": "text/plain" })
      this.res.write('user deleted');
      this.res.end();      
      return results;
   }
   }
}
