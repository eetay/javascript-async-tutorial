// Promise.all() creates a Promise that is resolved when all promises are resolved

let resolvedPromise = Promise.resolve('someValue')

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { 
      resolve('anotherValue')
      console.log('unresolvedPromise is RESOLVED')
    }, 3000)
  }
)

Promise.all([resolvedPromise, unresolvedPromise]).
  then(innerValue => console.log('all promises resolved with: ', innerValue))

console.log('LAST LINE IN THIS FILE')


