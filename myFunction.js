const myFunction = (firstParam, secondParam) => {
    console.log('做些事情,' + firstParam + ":" + secondParam)
}

// 2 秒之后运行
setTimeout(myFunction, 2000, "20210713", "学习node")