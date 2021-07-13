const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.npm_package_config_port

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain;charset=utf8')
  res.end('你好,小李\n')
})

server.listen(port, hostname, () => {
  console.log(`服务器在 http://${hostname}:${port}/`)
})