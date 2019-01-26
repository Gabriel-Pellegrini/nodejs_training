const EventEmitter = require('events')
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()
const nameEvent = 'user:click'
myEmitter.on(nameEvent, function (click) {
    console.log('An user has clicked', click)
})

// myEmitter.emit(nameEvent, 'on the space bar')
// myEmitter.emit(nameEvent, 'on the right mouse button')

// let count = 0

// setInterval(function () {
//     myEmitter.emit(nameEvent, 'on the right mouse button')
// }, 1000);

function main() {
    return new Promise(function (resolve,reject) {
        
        const stdin = process.openStdin()
        stdin.addListener('data', function (value) {
            // console.log(`You tiped : ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}

main().then(function (result) {
    console.log('Resultado',result.toString())
})