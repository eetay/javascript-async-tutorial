// 'async' is really wrapping function in a Promise

// An async function returns a 'Promise' which will resolve to whatever function returns

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve(3) }, 3000)
  }
)

async function f() {
   console.log('FIRST LINE IN f()')
   let innerValue = await unresolvedPromise
   console.log('LAST LINE IN f()', innerValue)
   return innerValue
}

let x = f()
console.log('X IS: ', x)

x.then(result => console.log('RESULT=', result))

console.log('LAST LINE IN THIS FILE')
