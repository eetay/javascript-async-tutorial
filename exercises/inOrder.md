### Exercise 1
Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
```javascript
var logOne = function(callback) {
  setTimeout(function() {
    console.log("one!");
    callback()
  }, Math.random() * 1000);
}

var logTwo = function(callback) {
  setTimeout(function() {
    console.log("two!");
    callback()
  }, Math.random() * 1000);
}

function inOrder(a, b) {  // Change this function to solve
   a(function () {})
   b(function () {})  
}

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
function makePromiseToLogOne(...) { /*your code here */ }
function makePromiseToLogTwo(...) { /*your code here */ }

function inOrder(promiseCreatorA, promiseCreatorB) {
    ... // your code here
}

inOrder(makePromiseToLogOne, makePromiseToLogTwo)
```




### Exercise 3
Using [node-fetch](https://humanwhocodes.com/snippets/2019/01/nodejs-medium-api-fetch/)
Make a node.js script that makes a [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) call to the [Star Wars API](https://swapi.co/) and get the opening crawl for each film in the series. Once you have finished that, loop through the array of planets for each movie and make more fetch calls to collect the name of each planet, organized by film. Then, console log an array of objects in which each object contains the opening crawl for a specific movie, along with the names of every planet featured in that movie.
Some more ```fetch()``` documentation: [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Exercise 4
Implement a node.js script which implements a simple version of ```Promise.all``` called ```doAllPromises()```. 
This function should accept an array of promises and ```await doAllPromises()``` should return an array of resolved values. If any of the promises are rejected, the function should catch them.
Food for thought: 
- what is return type for ```doAllPromises()```? 
- can ```doAllPromises()``` be defined as an async function?

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

function doAllPromises(arrayOfPromises) {
   // your code here
}

const promisesArray = [
    makePromise('PromiseA', 'resultOfA', ACTION_RESOLVE), 
    makePromise('PromiseB', 'resultOfB', ACTION_REJECT)
]

doAllPromises(promisesArray).then(
    arrayOfResults => console.log('All resolved:', arrayOfResults)
).catch(
    errorFromRejectedPromise => console.log('One rejected: ', errorFromRejectedPromise)
)
```
```
