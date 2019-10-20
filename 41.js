// A rejected promise without a catch() cause error; similar to throw without a catch

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { reject('my error') }, 3000)
  }
)

unresolvedPromise.
    then(innerValue => console.log('resolved with: ', innerValue))
    //catch(innerValue => console.log('rejected with:', innerValue))

console.log('LAST LINE IN THIS FILE')


