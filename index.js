const http = require("node:http");
const fs = require("node:fs");
http.createServer((req,res)=>{
    fs.createReadStream("./index.html").pipe(res)
    res.writeHead(200, {"Content-Type":"text/html"});
}).listen("3001", "127.0.0.2", ()=>{
    console.log("server is ready")
});