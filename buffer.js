const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
console.log(buf) //72
console.log(buf.length) //72

console.log('=========================')
console.log(buf.size) //72
console.log(buf.toString())

for(const item of buf){
    console.log(item)
}

buf[1] = 111
console.log(buf.toString())
