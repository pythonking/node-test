/**
 * 当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端，而不是等待直到文件被完全读取。
 *
 */
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
    const stream = fs.createReadStream(__dirname + '/cpp.txt')
    stream.pipe(res)
})
server.listen(3000)