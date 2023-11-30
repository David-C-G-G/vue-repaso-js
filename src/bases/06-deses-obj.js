const person = { //creamos el objeto persona
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const { age, name, codeName, power = 'no tiene poder' } = person //desestructuracion

//console.log(name)
//console.log(age)
//console.log(codeName)
//console.log(power)

//return con funcion de flecha sin ahorrar lineas de código y desestructuración
const createHero = ({ name, age, codeName, power }) => {
    //podemos poner o bien asi el nombre de cada uno de los atributos o bien
    return { //poner solo el atributo ya que lo reconoce ejemplo "name: name," solo seria "name,"
        id: 111232,
        name,
        age: age,
        codeName: codeName,
        power: power,
    }
}

//return implicito con funcion de flecha

const create_hero = ({ name, age, codeName, power = '1500' }) => ({ id: 132132, name, age, codeName, power })

console.log(create_hero(person))