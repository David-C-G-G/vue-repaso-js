/*
En la desestructuracion de arreglos a diferencia de 
la desestructuracion de objetos la posición si es importante
*/

const characters = ['Goku', 'Vegeta', 'Trunks']

const [g, v, t] = characters

//si no quisiera tomar en cuenta a los primeros dos personas simplemente el código seria:
// const[ , , t] = characters

//desestructuracion
const returnArray = ([g, v, t]) => ({ g, v, t })

console.log(returnArray(characters))