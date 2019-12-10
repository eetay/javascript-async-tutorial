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

function inOrder(a, b) {
   a(function() { 
	b(function(){}) 
   })
}

inOrder(logOne, logTwo)
