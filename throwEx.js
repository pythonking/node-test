const doSomething1 = () => {
    //...
    try {
        //...
    } catch (err) {
        //... 在本地处理
        throw new Error(err.message)
    }
    //...
}

doSomething1()
    .then(doSomething2)
    .then(doSomething3)
    .catch(err => console.error(err))