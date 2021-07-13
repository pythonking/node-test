const alert = require('alert')
const aFunction = async () => {
    return '测试'
}

aFunction().then(alert) // 这会 alert '测试'