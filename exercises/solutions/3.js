fetch = require('node-fetch')

fetch('https://swapi.co/api/films')
    .then(result=>result.json())
    .then(
    	films => films.results.forEach(
    		film => console.log(film.opening_crawl)
    	)
    )
