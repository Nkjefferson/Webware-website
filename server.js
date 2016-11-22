
var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'proposal.txt')
      break
    case '/index.html':
      sendFile(res, 'proposal.txt')
      break
    case '/css/style.css':
      fs.readFile(__dirname + '/public/css/style.css', function(error, content) {
        res.writeHead(200, {'Content-type': 'text/css'})
        res.end(content, 'utf-8')
      })
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'utf-8'})
    res.end(content, 'utf-8')
  })

}
