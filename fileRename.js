const fs = require('fs')
const app = 'D:\\node\\test\\app.txt'

fs.rename(app, 'cpp.txt', err => {
    if (err) {
        return console.error(err)
    }
})