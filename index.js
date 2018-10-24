const http = require('http');
const url = require('url')
var StringDecoder = require('string_decoder').StringDecoder
var decoder = new StringDecoder('utf-8')
const server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    res.setHeader('Content-Type', 'application/json')
    if (parsedUrl.pathname === '/hello') {
        res.writeHead(400)
        req.on('data', function (data) {
            var yourMessage = '';
            yourMessage = decoder.write(data);
            res.end(JSON.stringify({ greeting: "Hello!", message: yourMessage }))
        })
        req.on('end', function () {
            res.end(JSON.stringify({ greeting: "Hello!" }))
        })
    } else {
        res.writeHead(200)
        res.end(JSON.stringify({ youUsed: 'other route' }))
    }
})
server.listen(3000, function () {
    console.log('server is listening on port 3000')
});