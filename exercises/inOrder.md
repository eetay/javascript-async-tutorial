### Exercise 1
Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
```javascript
var logOne = setTimeout(function() {
  console.log("one!");
}, Math.random() * 1000);

var logTwo = setTimeout(function() {
  console.log("two!");
}, Math.random() * 1000);

inOrder(logOne, logTwo);
```

It should always log those two in order regardless of their timing:
```
// one
// two
```

### Exercise 2
Refactor inOrder to use promises.
you should create two functions:
```
function makePromiseToLogOne(...) {...}
function makePromiseToLogTwo(...) {...}
...
```




### Exercise 3
Using [node-fetch](https://humanwhocodes.com/snippets/2019/01/nodejs-medium-api-fetch/)
Make a node.js script that makes a [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) call to the [Star Wars API](https://swapi.co/) and get the opening crawl for each film in the series. Once you have finished that, loop through the array of planets for each movie and make more fetch calls to collect the name of each planet, organized by film. Then, console log an array of objects in which each object contains the opening crawl for a specific movie, along with the names of every planet featured in that movie.

### Exercise 4
Implement a node.js script which implements a simple version of ```Promise.all``` called ```waitForAllPromises()```. This function should accept an array of promises and return an array of resolved values. If any of the promises are rejected, the function should catch them.
- Food for thought: what should ```waitForAllPromises()``` return? can it be defined as an async function?
Add your code where it says '// your code here'

```javascript
const ACTION_REJECT='reject'
const ACTION_RESOLVE='resolve'

const makePromise = (promiseId, value, action_type) => {
  const timeout = Math.random() * 10000
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

function waitForAllPromises(arrayOfPromises) {
   // your code here
}

const promisesArray = [
    makePromise('PromiseA', 'resultOfA', ACTION_RESOLVE), 
    makePromise('PromiseB', 'resultOfB', ACTION_REJECT)
]

waitForAllPromises(promisesArray).then(
    result => console.log('All resolved:', result)
).catch(
    errorResult => console.log('One rejected: ', errorResult)
)
```
```
