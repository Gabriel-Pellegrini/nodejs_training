const {
    getPeople
} = require('./services')


Array.prototype.myReduce = function (callback,initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for(let i =0 ; i <= this.length -1; i++){
        finalValue = callback (finalValue,this[i],this)
    }
    return finalValue;
}

async function main() {
    try {
         const { results } = await getPeople('a')
         const pesos = results.map(item => parseInt(item.height))

        // [20.5,40.3,30.9] = 0
        console.log('pesos', pesos)
        
        // const total = pesos.reduce((previous,next) =>{
        //     return previous + next
        // },0)
        const myList = [
            ['Gabriel','Maciel'],
            ['Eric','Pellegrini']
        ]

        const total =myList.myReduce((previous,next) =>{
            return previous.concat(next);
        },[])
        .join (', ')
        console.log('total',total)
    } catch (error) {
        console.error('Deu ruim',error)
    }
}

main ()