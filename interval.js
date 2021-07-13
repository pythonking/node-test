const myFunction = () => {
    console.log("hello,myFunction")

    setTimeout(myFunction, 1000)
}

setTimeout(myFunction, 1000)