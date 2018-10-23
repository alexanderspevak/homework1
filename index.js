const http=require('http');
const url = require('url')

const server=http.createServer(function(req,res){
    var parsedUrl=url.parse(req.url,true);
    console.log('parsedUrl',parsedUrl)
    if(parsedUrl.pathname==='/hello'){
        res.setHeader('Content-Type','application/json')
        res.writeHead(400)
        res.end(JSON.stringify({course:"excellent"}))
    }
        res.end('other route')
})

server.listen(3000,function(){
    console.log('server is listening on port 3000')
})

