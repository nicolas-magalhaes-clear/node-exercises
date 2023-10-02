const http = require('http')
const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Acho melhor usar o express</h1>')
})

server.listen(3000, function(){
    console.log('Escutando porta 3000')
})