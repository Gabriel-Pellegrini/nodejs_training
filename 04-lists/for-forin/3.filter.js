const { getPeople } = require('./services')

/*

    const item = {
        nome:'Gabriel',
        idade: 22
    }

    const {nome , idade} =item
    console.log(nome,idade)
*/

Array.prototype.myFilter = function (callback) {
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item,index,this)
        //0,"",null,undefined ===false
        if(!result)continue;
        lista.push(item)
    }
    return lista;
}

async function main(){
    try {
        const {
            results
        } = await getPeople('a')

        // const larsFamily = results.filter(function (item) {
        //     // por padrão precisa retornar um booleano para informar se deve manter ou remover da lista
        //     // false > remove da lista
        //     // true > mantem na lista
        //     // não encontrou = -1
        //     // encontrou = index position
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })
        const larsFamily =results.myFilter((item,index,lista) => {
            console.log(`index : ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = larsFamily.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.log('Deu ruim', error)
    }
}

main()