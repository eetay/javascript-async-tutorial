// There's no function like Promise.all to serially evaluate many promises. You can build a polyfill  
// Promise.serial() is based on https://decembersoft.com/posts/promises-in-serial-with-array-reduce/
// Promise.serial2() is my own code using await

Promise.__proto__.serial = promiseArray => promiseArray.reduce(
    (promiseChain, currentTask) => promiseChain.then(
        chainResults => currentTask.then(
            currentResult => [ ...chainResults, currentResult ]
        )
    ), 
    Promise.resolve([])
)

Promise.__proto__.serial2 = async promiseArray => {
    let resultArray = []
    for (p of promiseArray) resultArray.push(await p)
    return resultArray
}

let p1 = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve('value of p1') }, 5000)
  }
)
console.log('p1 runs!')

let p2 = new Promise( 
  (resolve, reject) => {
    setTimeout(function () { resolve('value of p2') }, 3000)
  }
)
console.log('p2 runs!')

// Promise.serial([p1,p2]).then( 
//     resultArray => console.log('ALL DONE: ', resultArray)
// )

Promise.serial2([p1,p2]).then( 
    resultArray => console.log('ALL DONE: ', resultArray)
)
