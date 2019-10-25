const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req,res)=>{
  const path  = url.parse(req.url).pathname;
  if(path == "/"){
    res.end(fs.readFileSync('./index.html'))
    return;
  }
  res.end(fs.readFileSync("."+path))
}).listen(88,function(){
  console.log('your Mario already running on the localhost:80.....')
});