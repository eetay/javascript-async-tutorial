fetch = require('node-fetch')

async function getPlanets(film) {
    const allFetches = film.planets.map(
        planetUrl => fetch(planetUrl).then( fetchReply => fetchReply.json() )
    )
    return Promise.all(allFetches).then( planets => {
        const planetsExtract = planets.map( planet => planet.name )
        return { [film.title]: planetsExtract }
    })
}

function getFilms() {
    return fetch('https://swapi.co/api/films').then( fetchReply => fetchReply.json() ).then( swapiReplyBody => swapiReplyBody.results )
}

function solveA(films) {
    films.forEach(
        film => console.log(film.opening_crawl)
    )
}

async function solveB(films) {
    const getFromAllFilms = films.map(
        film => getPlanets(film)
    )
    const allFilmPlanets = await Promise.all(getFromAllFilms)
    console.log(allFilmPlanets)
}

async function solveAll() {
    getFilms().then(films => solveA(films))
    getFilms().then(films => solveB(films))
}

solveAll()

