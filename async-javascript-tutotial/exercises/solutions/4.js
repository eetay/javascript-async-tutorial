const ACTION_REJECT='reject'
const ACTION_RESOLVE='resolve'

const makePromise = (promiseId, value, action_type) => {
  const timeout = Math.random() * 1000
  return new Promise(
    (doResolve, doReject) => {
      const doAction = (action_type == ACTION_REJECT ? doReject : doResolve)
      const resolveValue = { id: promiseId, value }
      console.log(`Promise '${promiseId}' started (${action_type} in ${timeout}ms)`)
      setTimeout(
        () => doAction(resolveValue),
        timeout
      )
    }
  )
}

function doAllPromises(arrayOfPromises) {
    return new Promise(
        (resolve, reject) => {
            let unresolved = arrayOfPromises.length
            let results = arrayOfPromises.map(promise => null)
            arrayOfPromises.forEach(
                (promise, index) => promise.then( 
                    res => {
                        results[index] = res
                        unresolved -= 1
                        if (unresolved <= 0) resolve(results)  
                        return res // not mandatory
                    }
                ).catch(
                    err => reject(err)
                )
            )
        }
    )
}

const promisesArray = [
    makePromise('1.PromiseA', 'resultOfA', ACTION_RESOLVE), 
    makePromise('1.PromiseB', 'resultOfB', ACTION_RESOLVE)
]

doAllPromises(promisesArray).then(
    arrayOfResults => console.log('All resolved:', arrayOfResults)
).catch(
    errorFromRejectedPromise => console.log('One rejected: ', errorFromRejectedPromise)
)

const promisesArray2 = [
    makePromise('2.PromiseA', 'resultOfA', ACTION_RESOLVE), 
    makePromise('2.PromiseB', 'resultOfB', ACTION_REJECT)
]

doAllPromises(promisesArray2).then(
    arrayOfResults => console.log('All resolved:', arrayOfResults)
).catch(
    errorFromRejectedPromise => console.log('One rejected: ', errorFromRejectedPromise)
)

