//创建可写流
const Stream = require('stream')
const writableStream = new Stream.Writable()
//然后实现 _write：
writableStream.write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}
//现在，可以通过以下方式传输可读流：
process.stdin.pipe(writableStream)