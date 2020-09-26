// Waiting for promise to resolve, instead of `.then()`

/*
Any promise we have, we can await. 
We can write the code like it's syncronous flow!

The caveat: await can be used only inside a "async" function: a function that is itself called asyncronously
*/

let unresolvedPromise = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve(3) }, 3000)
  }
)

async function f() {
   console.log('FIRST LINE IN f()')
   let innerValue = await unresolvedPromise
   console.log('LAST LINE IN f()', innerValue)
}

f()

console.log('LAST LINE IN THIS FILE')
