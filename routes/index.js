
const url = require("url")
const Db =  require("../boostrap/Db.js")
const UserController = require('../app/Controllers/UserController.js')
const Router = require ('../boostrap/Router.js')
module.exports = class routes {
    constructor(req, res) {
      this.req = req
      this.res = res
      const router = new Router(this.req, this.res)

    // router.get("/", function(req, res) {

    //   });
    // router.get("/users", (req, res) => {
    //     const userController = new UserController(req, res);
    //     userController.getAll();
    //   });
    
    // router.get("/users/:id", (req, res) => {
        
    //   });

    // router.put("/users/:id", (req, res) => {
        
    //   });

    // router.post("/users", (req, res) => {
        
    //   });

    // router.delete("/users/:id", (req, res) => {
        
    //   });
  if(this.req.url == "/users"){
    if(this.req.method === 'GET'){
      this.res.writeHead(200, { "Content-type": "text/plain" })
      const userController = new UserController(this.req, this.res);
      return userController.getAll();
    }
    else  if(this.req.method === 'POST'){
      const userController = new UserController(this.req, this.res);
      const body = router.getPostData(this.req)
      let isJson = true
      body.then((result) => {
        try {JSON.parse(result);}
        catch(e) {
          isJson = false;
          res.writeHead(422, { "Content-type": "text/plain" })
          res.end(`error ${res.statusCode} Unprocessable Entity`)
        }
        if(isJson == true){
          const { name, email, password } = JSON.parse(result)
          userController.post(name,email, password)
          res.writeHead(201, { "Content-type": "text/plain" })
        }
        });
    }
    else{
      this.res.writeHead(405, { "Content-type": "text/plain" })
      return this.res.end(`error ${this.res.statusCode} Method not allowed`)
    }
      
  }
  else if(this.req.url.match(/\/users\/([0-9]+)/)){
    if(this.req.method === 'GET'){
      const id = this.req.url.split("/")[2];
      const userController = new UserController(this.req, this.res);
      userController.get(id);
      this.res.writeHead(200, { "Content-type": "text/plain" })
    }
    else if(this.req.method === 'PUT'){
      const userController = new UserController(this.req, this.res);
      const id = this.req.url.split("/")[2];
      const body = router.getPostData(this.req)
      let isJson = true
      body.then(function(result) {
        try {JSON.parse(result);}
        catch(e) {
          isJson = false;
          res.writeHead(422, { "Content-type": "text/plain" })
          res.end(`error ${res.statusCode} Unprocessable Entity`)
        }
        if(isJson == true){
          const { name, email, password } = JSON.parse(result)
          userController.update(id,name, email, password)
          res.writeHead(201, { "Content-type": "text/plain" })
        }
        });
    }
    else if(this.req.method === 'DELETE'){
      const userController = new UserController(this.req, this.res);
      const id = this.req.url.split("/")[2];
      userController.delete(id)
    }
    else{
      this.res.writeHead(405, { "Content-type": "text/plain" })
      return this.res.end(`error ${this.res.statusCode} Method not allowed`)
    }
  }
  else if(this.req.url == "/"){
    if(this.req.method === 'GET'){
      this.res.writeHead(200, { "Content-type": "text/plain" })
      this.res.write('index');
      this.res.end()
    }else{
      this.res.writeHead(405, { "Content-type": "text/plain" })
      return this.res.end(`error ${this.res.statusCode} Method not allowed`)
    }

  }
  else{
    this.res.writeHead(404, { "Content-type": "text/plain" })
    return this.res.end(`error ${this.res.statusCode} Page Not Found`)
  } 

}
}

