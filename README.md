# References:
- [Understand promises before you start using async/await](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)
- [Promise - the documentation](https://developer.mozilla.org/he/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise Chaining](https://javascript.info/promise-chaining)

# Content:
- [10.js](./10.js) // A promise is a special kind of javascript object which contains another object
- [11.js](./11.js) // How do I access the data in a promise? I use `.then()`:
- [12.js](./12.js) // then() handler function is executed similar to 'setTimeout(handler, 0)', triggered when promise is resolved
- [20.js](./20.js) // A Promise object contains a value not necessarily known when the promise is created
- [21.js](./21.js) // A asyncronous Promise is created with 'new Promise( (resolve, reject) => {...} )'
- [22.js](./22.js) // whether the value will be there in future, or it’s already known, I just call `then()` in either case
- [23.js](./23.js) // Promise.all() creates a Promise that is resolved when all promises are resolved
- [30.js](./30.js) // Waiting for promise to resolve, instead of 'then()'
- [31.js](./31.js) // 'async' is really wrapping function in a Promise
- [32.js](./32.js) // 'async' is really wrapping function in a Promise
- [33.js](./33.js) // async functions only seem to execute all in syncronous manner
- [34.js](./34.js) // async functions only seem to execute all in syncronous manner
- [40.js](./40.js) // A promise can be rejected with a value/error - use catch() to handle rejection
- [41.js](./41.js) // A rejected promise without a catch() cause error; similar to throw without a catch
- [50.js](./50.js) // then() can be chained.
