const obj = {
    name: 'joe',
    age: 35,
    person1: {
        name: 'Tony',
        age: 50,
        person2: {
            name: 'Albert',
            age: 21,
            person3: {
                name: 'Peter',
                age: 23
            }
        }
    }
}
//console.log(obj)
//其中 2 是用于缩进的空格数。
//console.log(JSON.stringify(obj, null, 2))

//另一种选择是使用下面,第 2 级之后的嵌套对象会被展平
require('util').inspect.defaultOptions.depth = null
console.log(obj)