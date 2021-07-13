const fs = require('fs')
const path = require('path')
const notes = 'D:\\node\\test\\app.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.basename(notes, path.extname(notes)) //notes
path.extname(notes) // .txt


console.log(path.dirname(notes) )
console.log(path.basename(notes))
console.log(path.basename(notes, path.extname(notes)))
console.log(path.extname(notes) )
console.log(path.resolve(notes))