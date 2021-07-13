const content = '加油学习node'
const fs = require('fs')
const app = 'D:\\node\\test\\app.txt'

fs.appendFile(app, content, err => {
    if (err) {
        console.error(err)
        return
    }
    //完成！
})