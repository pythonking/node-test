const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/cpp.txt', (err, data) => {
        res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
        res.end(data)
    })
})
server.listen(3002)