import { heroes } from "../data/heroes"

const validPublishers = heroes.map(heroe => heroe.publisher)
//const validIds = heroes.map(heroe => heroe.id)

export const getHeroesByPublisher = (publisher) => {
    if(!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}

export const getHeroById = (id) => {    
    return heroes.find(hero => hero.id === id)
}

export const getHeroByName = (name = '') => {    
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()))
}