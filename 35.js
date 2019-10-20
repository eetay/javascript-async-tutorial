// use try-catch around await for a Promise, instead of a .catch() handler

let p1 = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { reject('my error') }, 5000)
  }
)

async function f() {
   console.log('FIRST LINE IN f()')
   try {
     let value1 = await p1  // waits ~5 seconds
      console.log('p1 resolved with value: ', value1)
   } catch (e) {
      console.log('p1 rejected: ', e)
   }
   console.log('LAST LINE IN f()')
}

f()

console.log('LAST LINE IN THIS FILE')
