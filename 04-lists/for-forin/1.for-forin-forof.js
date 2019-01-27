const service = require ('./services')

async function main() {
    try {
        const result = await service.getPeople('Che')
        const names = []
        console.time('for')
        for(let i =0 ; i <= result.results.length -1; i++){
                const person = result.results[i]
                names.push(person.name)
            }
            console.timeEnd('for')
            
        console.time('forin')
            for(let i in result.results){
            const person = result.results[i]
            names.push(person.name)
        }
        console.timeEnd('forin')
        
        
        console.time('forof')
        for (person of result.results){
            names.push (person.name)
        }
        console.timeEnd('forof')

        console.log('names: ',names)
    } catch (error) {
        console.error('erro interno', error)
    }
}

main()