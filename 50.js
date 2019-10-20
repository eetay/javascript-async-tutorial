// then() can be chained. 
// Result of one then()'s handler is passed as parameter to next then()'s handler
// IMPORTANT: If such a result is a 'Promise' it is resolved before excuting the next handler


let p1 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 2000); // The initial promise resolves in 1 second

}).then(function(resultOfPromise) { // After 1 s

  console.log('Promise resolved to: ', resultOfPromise); 
  return new Promise(
    function(resolve, reject) {
      setTimeout(() => resolve(resultOfPromise * 3), 4000); 
    }
  )

}).then(function(resultFromPrevious) { 

  console.log('result from 1st then()', resultFromPrevious);
  return resultFromPrevious * 2

}).then(function(resultFromPrevious) {
  console.log('result from 2nd then()', resultFromPrevious);

  return resultFromPrevious * 2

})
console.log('LAST LINE IN THIS FILE')
