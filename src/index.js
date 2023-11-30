//forma tradicional de construir una funcion de retorno
//function saludar(xyz) {
//    return 'Hola ' + xyz
//}

//forma mas segura de construir una funcion de retorno
//const saludar = function(xyz) {
//    return 'Hola ' + xyz
//}

//lambda function (forma moderna de construir una funcion de retorno)
const saludar = (xyz) => 'Hola ' + xyz

const nombre = 'Tony'

const getUser = () => ({ uid: 'ABC123', username: 'Tony001' })

const heroes = [{
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

//const existe = heroes.some((heroe) => heroe.id === 3)
const heroe = heroes.find((heroe) => heroe.id === 3)


console.log(heroe)