// const fs = require('fs')
//
// const content = '一些内容'
// const bpp = 'D:\\node\\test\\bpp.txt'
//
// fs.writeFile(bpp, content, err => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     //文件写入成功。
// })
const fs = require('fs')

const content = '一些内容不宜'
const bpp = 'D:\\node\\test\\bpp.txt'

try {
    const data = fs.writeFileSync(bpp, content, {flag: 'a+'}, err => {
        console.error(err)
    })
    //文件写入成功。
    console.log(data)
} catch (err) {
    console.error(err)
}