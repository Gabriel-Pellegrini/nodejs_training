const service = require('./services')

Array.prototype.meuMap = function (callback) {
    const newMappedArray =[]
    for( let index =0;index <= this.length-1;index ++){
        const result = callback(this[index],index)
        newMappedArray.push(result)
    }

    return newMappedArray
}

async function main() {
    try {
        const result = await service.getPeople('Sky')
        // const names =[]
        // result.results.forEach(element => {
        //     names.push(element.name)
        // });

        // const names = result.results.map(function (pessoa) {
        //     return pessoa.name
        // })

        // const names = result.results.map((pessoa) => pessoa.name)
        const names = result.results.meuMap((pessoa,index) => {
            return `[${index}]${pessoa.name}`
        })

        console.log('names', names)
    } catch (error) {
        console.error('Deu Ruim',error)
    }
}

main()