const UserController = require('../app/Controllers/UserController.js')
module.exports = class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
    }
    getPostData(req) {
        return new Promise((resolve, reject) => {
            try {
                let body = ''
    
                req.on('data', (chunk) => {
                    body += chunk.toString()
                })
    
                req.on('end', () => {
                    resolve(body)
                })
            } catch (error) {
                reject(err)
            }
        })
    }
    get(url) {
        return new Promise((resolve, reject) => {
            try {
                resolve(url)
                if(this.req.method === 'GET' && url == '/'){
                    this.res.writeHead(200, { "Content-type": "text/plain" })
                    this.res.end()
                }
                if(this.req.method === 'GET' && url == '/users'){
                    console.log('test')
                }
            } catch (error) {
                reject(error)
            }
        })
    }
    post(){
        // if(this.req.url == '/users' && this.req.method === 'POST'){
        //     const userController = new UserController(this.req, this.res);
        //     const body = this.getPostData(this.req)
        //     body.then(function(result) {
        //         const { name, email, password } = JSON.parse(result)
        //         userController.post(name,email, password)
        //     })
        //     this.res.writeHead(201, { "Content-type": "text/plain" })
        // }
        // else{
        //     this.res.writeHead(404, { "Content-type": "text/plain" })
        //     return this.res.end(`error ${this.res.statusCode} Page Not Found`)
        // }
    }
    
    put() {
        // if(this.req.url.match(/\/users\/([0-9]+)/) && this.req.method === 'PUT'){
        //     const userController = new UserController(this.req, this.res);
        //     const id = this.req.url.split("/")[2];
        //     const body = this.getPostData(this.req)
        //     body.then(function(result) {
        //             const { name, email, password } = JSON.parse(result)
        //             userController.update(id,name, email, password)
        //          })
        //         this.res.writeHead(201, { "Content-type": "text/plain" })
        //         this.res.write('user mis à jour')
        //         this.res.end()
            
        // }
        // else{
        //     this.res.writeHead(404, { "Content-type": "text/plain" })
        //     return this.res.end(`error ${this.res.statusCode} Page Not Found`)
        // }
    }
    delete() {
        // if(this.req.url.match(/\/users\/([0-9]+)/) && this.req.method === 'DELETE'){
        //     const userController = new UserController(this.req, this.res);
        //     const id = this.req.url.split("/")[2];
        //     userController.delete(id)
        //     this.res.writeHead(200, { "Content-type": "text/plain" })
        //     this.res.write('user supprimé')
        //     this.res.end()
        // }
        // else{
        //     this.res.writeHead(404, { "Content-type": "text/plain" })
        //     return this.res.end(`error ${this.res.statusCode} Page Not Found`)
        // }
    }
}