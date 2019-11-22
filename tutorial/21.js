// A asyncronous Promise is created with 'new Promise( (resolve, reject) => {...} )'

// resolve() and reject() are how we stop the promise execution. 
// Note: Promise execution does not stop at the last line of the handler function. only reject() or resolve() do that.

// A Promise is resolved only once, regardless of how many then() handlers

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve(3) }, 3000)
  }
)

unresolvedPromise.then(innerValue => console.log('resolved with: ', innerValue)) // the then() handler is called when the promise is resolved

console.log('unresolvedPromise state is: ', unresolvedPromise)
console.log('LAST LINE IN THIS FILE')


