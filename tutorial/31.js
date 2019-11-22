// `async` is forcing the function to return a `Promise` which will resolve to whatever function execution returns, when function is done

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve(3) }, 3000)
  }
)

async function f() {
   console.log('FIRST LINE IN f()')
   let innerValue = await unresolvedPromise
   console.log('LAST LINE IN f()', innerValue)
   return innerValue // f() returns a Promise which resolves to 'innerValue' when this statement completes
}

let x = f()
console.log('X IS: ', x)

console.log('LAST LINE IN THIS FILE')
