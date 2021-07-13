const fs = require('fs')

const path = require('path')
const app = 'D:\\node\\test\\app.txt'
const dir = 'D:\\node\\'



fs.readdirSync(dir).map(fileName => {
    console.log(dir+fileName)
    return path.join(dir, fileName)
})