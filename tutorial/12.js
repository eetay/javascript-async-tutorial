// then() handler function is executed similar to 'setTimeout(handler, 0)', triggered when promise is resolved

Promise.resolve(2).then(innerObject => console.log(innerObject))

let someObject={ a: 1 }
Promise.resolve(someObject).then(innerObject => console.log(innerObject))

console.log('LAST LINE IN FILE')
