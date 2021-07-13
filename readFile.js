// const fs = require('fs')
// const notes = 'D:\\node\\test\\app.txt'
//
// fs.readFile(notes, 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
const fs = require('fs')
const notes = 'D:\\node\\test\\app.txt'

try {
    const data = fs.readFileSync(notes, 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}