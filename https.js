const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('welcome to our short history')
    }
   
    res.end(
    `<h1>oops</h1>
    <p>we cant seem to find your page</p>
    <a href='/' back >Home page</a>`)
})

server.listen(5000)
