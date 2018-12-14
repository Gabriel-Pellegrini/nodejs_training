/* 
    0- Obter um usuário 
    1- Obter o numero de telefone de um usuario a partir de seu ID 
    2- Obter o numero endereço a partir de seu ID
*/

function getUser(callback) {
    setTimeout(() => {
        return callback(null,{
            id:1,
            name: "Gabriel",
            birthDay: new Date()
        })

    }, 1000);
}

function getPhone(idUser,callback) {
    setTimeout(() => {
        return callback(null,{
            phone:"56671234",
            ddd: 11
        })

    }, 2000);
}

function getAddress(idUser,callback) {
    setTimeout(() => {
        return callback(null,{
            street: 'virginia maria',
            streetNumber: 40
        })
    }, 2000);
}

function resolveUser(error,user) {
    console.log('User ', user)
}

getUser(function resolveUser(errUser,user){
    if (errUser){
        // null || ""|| 0 === false
        console.log('Deu ruim em usuário',errUser)
        return;
    }
    getPhone(user.id, function resolvePhone(errPhone,phone) {
        if (errPhone) {
            // null || ""|| 0 === false
            console.log('Deu ruim em Telefone', errPhone)
            return;
        }
        getAddress(user.id, function resolveAddress(errAddress,address) {
            if (errAddress){
                // null || ""|| 0 === false
                console.log('Deu ruim em Endereço', errAddress)
                return;
            }

            console.log(`Nome: ${user.name},
Endereco: ${address.street},${address.streetNumber}
Telefone: (${phone.ddd})${phone.phone}`)
            
        })
    })
})
