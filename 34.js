// async functions only seem to execute all in syncronous manner

// And a pending 'Promise' starts executing the moment it's created

let p1 = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve('value of p1') }, 5000)
  }
)
console.log('p1 runs!')

function createP2() {
  let p2 = new Promise( 
    (resolve, reject) => {
      setTimeout(function () { resolve('value of p2') }, 3000)
    }
  )
  console.log('p2 runs!')
  return p2
}

async function f() {
   console.log('FIRST LINE IN f()')
   let value1 = await p1  // waits ~5 seconds
   console.log('f(): value1: ', value1)

   // Note: 5 seconds have passed waiting for p1
   
   let p2 = createP2() // p2 only starts executing now
   let value2 = await p2  // will wait another 3 seconds
   console.log('f(): value2: ', value2)
}

f()

console.log('LAST LINE IN THIS FILE')
