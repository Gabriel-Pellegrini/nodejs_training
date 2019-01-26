/* 
    0- Obter um usuário 
    1- Obter o numero de telefone de um usuario a partir de seu ID 
    2- Obter o numero endereço a partir de seu ID
*/
//importamos um módulo interno do node
const util = require('util')
const getAddressAsync = util.promisify(getAddress)



function getUser(callback) {
    //Quan tivermos um problema -> Reject
    //Quando funcionar -> resolve
    
    return new Promise(function resolvePromise(resolve,reject) {
        setTimeout(() => {
            // return reject(new Error('Deu Ruim de verdade'))
            return resolve({
                id:1,
                name: "Gabriel",
                birthDay: new Date()
            })
    
        }, 1000);
        
    })
}

function getPhone(idUser) {
    return new Promise(function resolvePromise(resolve,reject) {
        setTimeout(() => {
            return resolve({
                phone:"56671234",
                ddd: 11
            })
    
        }, 2000);
        
    })
}

function getAddress(idUser,callback) {
    setTimeout(() => {
        return callback(null,{
            street: 'virginia maria',
            streetNumber: 40
        })
    }, 2000);
}
const userPromise = getUser()
// Para manipular sucesso .then
// Para manipular erros .catch
userPromise
.then(function (user) {
    return getPhone(user.id)
        .then(function resolvePhone(result) {
            return {
                user: {
                    name: user.name,
                    id: user.id
                },
                phone: result
            }
        })
})
.then(function (resultado) {
    const address =getAddressAsync(resultado.user.id)
    return address.then(function resolveAddress(result) {
        return {
            user: resultado.user,
            phone:resultado.phone,
            address:result
        }
    });
})
.then(function (resultado) {
    console.log(`
        Nome: ${resultado.user.name}
        Endereco: ${resultado.address.street},${resultado.address.streetNumber}
        Telefone: (${resultado.phone.ddd}) ${resultado.phone.phone}
    `)
})
.catch(function (error) {
    console.error('Deu Ruim',error)  
})

// getUser(function resolveUser(errUser,user){
//     if (errUser){
//         // null || ""|| 0 === false
//         console.log('Deu ruim em usuário',errUser)
//         return;
//     }
//     getPhone(user.id, function resolvePhone(errPhone,phone) {
//         if (errPhone) {
//             // null || ""|| 0 === false
//             console.log('Deu ruim em Telefone', errPhone)
//             return;
//         }
//         getAddress(user.id, function resolveAddress(errAddress,address) {
//             if (errAddress){
//                 // null || ""|| 0 === false
//                 console.log('Deu ruim em Endereço', errAddress)
//                 return;
//             }

//             console.log(`Nome: ${user.name},
// Endereco: ${address.street},${address.streetNumber}
// Telefone: (${phone.ddd})${phone.phone}`)
            
//         })
//     })
// })
