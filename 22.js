// whether the value will be there in future, or it’s already known, I just call `then()` in either case
//  the then() handler is always called asyncronously [behaves like using setTimeout(..., 0)]

let resolvedPromise = Promise.resolve('someValue')

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve(3) }, 3000)
  }
)

unresolvedPromise.then(innerValue => console.log('unresolvedPromise FIRST then()', innerValue)) // the then() handler is called when the promise is resolved
unresolvedPromise.then(innerValue => console.log('unresolvedPromise SECOND then()', unresolvedPromise))
resolvedPromise.then(innerValue => console.log('resolvedPromise\'s then()', innerValue))

console.log('unresolvedPromise state is: ', unresolvedPromise)
console.log('LAST LINE IN THIS FILE')


