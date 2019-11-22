// A promise can be rejected with a value/error - use catch() to handle rejection

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { reject('my error') }, 3000)
  }
)

unresolvedPromise.
    then(innerValue => console.log('resolved with: ', innerValue)).
    catch(innerValue => console.log('rejected with:', innerValue))

console.log('LAST LINE IN THIS FILE')


