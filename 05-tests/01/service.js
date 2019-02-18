const {
    get
} = require('axios');


const URL = `https://swapi.co/api/people`
async function getPeople(nome) {
    const url = `${URL}/?search${nome}&format=json`
    const result = await get(url)
    return result.data.results.map(mapPeople)
}

function mapPeople(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    getPeople
}