const fs = require('fs-extra')

const folder = 'D:\\node\\empty'

// fs.remove(folder, err => {
//     console.error(err)
// })
// fs.remove(folder)
//     .then(() => {
//         console.log('删除完成')
//     })
//     .catch(err => {
//         console.error(err)
//     })

async function removeFolder(folder) {
    try {
        await fs.remove(folder)
        console.log('删除完成')
    } catch (err) {
        console.error(err)
    }
}

removeFolder(folder)