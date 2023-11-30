//objeto literal
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 21321,
        lat: 165.21,
        lng: 52.6546
    }
}

//pasado por referencia, se modifican ambos valores
//const persona2 = persona

const persona2 = {...persona }

persona2.nombre = 'Peter'

//funcion set
//const personaSet = new Set()

//console.log(personaSet)
console.log(persona)
console.log(persona2)