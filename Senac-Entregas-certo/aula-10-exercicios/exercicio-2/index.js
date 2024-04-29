
let array = ['Churrasco', 'Polenta', 'Carreteiro', 'Xis', 'feijoada']


console.log(array)



console.log('Essas são as minhas comidas preferidas: ')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])


const comidaFavorita = prompt ('Qual a sua comida favorita?')
array.splice(1, 1, comidaFavorita)
console.log(array)
