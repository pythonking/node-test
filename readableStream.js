/**
 * 创建可读流
 */
const Stream = require('stream')
const readableStream = new Stream.Readable()
readableStream._read = () => {}
//也可以使用 read 选项实现 _read：
const readableStream = new Stream.Readable({
    read() {}
})
//现在，流已初始化，可以向其发送数据了：
readableStream.push('hi!')
readableStream.push('ho!')