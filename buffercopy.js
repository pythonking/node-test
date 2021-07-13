const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(3) //分配 4 个字节。
buf.copy(bufcopy)

console.log(bufcopy.toString())