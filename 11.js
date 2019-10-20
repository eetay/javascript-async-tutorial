// How do I access the data in a promise? I use `.then()`:


Promise.resolve(2).then(innerObject => console.log(innerObject))

let someObject={ a: 1 }
Promise.resolve(someObject).then(innerObject => console.log(innerObject))

