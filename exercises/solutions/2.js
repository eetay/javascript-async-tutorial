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

function promisify(a) {
   return new Promise(function(resolve,reject) {
	return a(resolve)
   })
}

function makePromiseToLogOne() {
	return promisify(logOne)
}

function makePromiseToLogTwo() {
	return promisify(logTwo)
}

function inOrder(a, b) {
   a().then( notUsed => b() )
}

inOrder(makePromiseToLogOne, makePromiseToLogTwo)
