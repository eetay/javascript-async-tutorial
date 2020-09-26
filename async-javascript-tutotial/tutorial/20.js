// A Promise object contains a value not necessarily known when the promise is created

// How?

/*
A Promise is in one of these states:
- pending: initial state, value is not known
- resolved: meaning that the operation completed successfully and value is known. 
- rejected: meaning that the operation failed and the error is known. 

A pending promise starts executing immediately
A pending promise stops when its either resolved or rejected 
*/

let resolvedPromise = Promise.resolve(3) // Promise.resolve() function is a quick way to create a resolved promise

resolvedPromise.then(innerValue => console.log('FIRST then()', innerValue)) // the then() handler is called since the promise is resolved
resolvedPromise.then(innerValue => console.log('SECOND then()', innerValue)) // the then() handler is called since the promise is resolved

console.log('LAST LINE IN THIS FILE')


