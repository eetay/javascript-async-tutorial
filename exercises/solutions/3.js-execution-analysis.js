// (!) START FROM 'A1' BELOW

fetch = require('node-fetch')

function getFilms() {                                                              // B0. getFilms() executes:
    const extractSwapiReplyFromFetchReply = fetchReply => fetchReply.json()            // B1. extractSwapiReplyFromFetchReply function is defined 
    const extractFilmArrayFromSwapiReply = swapiReplyBody => swapiReplyBody.results    // B2. extractFilmArrayFromSwapiReply function is defined
    let promiseToGetArrayOfFilms = fetch('https://swapi.co/api/films')                 // B3. ```fetch``` is called and sends http call
                                                                                          // it returns a promise (A) resolved when http is completed
        .then( extractSwapiReplyFromFetchReply )                                       // B4. ```then``` is called on promise (A),                            // C1. when promise (A) is done, 
                                                                                          // it schedules extractSwapiReplyFromFetchReply to                     // ```extractJsonFromFetchReply``` executes 
                                                                                          // execute when promise (A) is resolved 
                                                                                          // it finally completes and returns a new promise (B). 
                                                                                          // note: ```extractJsonFromFetchReply``` was not executed
        .then( extractFilmArrayFromSwapiReply )                                        // B5. ```then``` is called on promise (B)                             // C2.  when promise (B) is done, 
                                                                                          // returned from previous ```then```,                                  // ```extractFilmArrayFromSwapiReply``` executes
                                                                                          // it schedules extractFilmArrayFromSwapiReplyi to execute 
                                                                                          // when promise (B) is resolved
                                                                                          // it finally completes and returns a new promise (D)  
                                                                                          // that gets assigned to ```promiseToGetArrayOfFilms```
    return promiseToGetArrayOfFilms                                                    // getFilms() returns promise (D)
}


function solveA(films) {                                                           
    films.forEach(                                                                                                                                            // C4. solveA executes
        film => console.log(film.opening_crawl)
    )
}

async function solveAll() {
    getFilms()                                                                     // A1. ```getFilms``` called. 'B' steps executed; returns promise (D)
        .then(solveA)                                                              // A2. ```then``` schedules solveA for execution                           // C3. when promise (D) completes, 
                                                                                      // when promise (D) is resolved                                            // ```solveA``` is called
    console.log('solveAll is done')                                                // A3. 'solveAll is done' gets printed
}

solveAll()                                                                         // A4. after ```solveAll()``` completes, node.js is idle
                                                                                      // when promise (D) gets resolved
                                                                                      // 'C' steps are executed

