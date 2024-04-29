
const n1 = prompt('Digite um número')
const n2 = prompt('Digite um segundo número')

console.log(`Números ${n1} e ${n2}`)


function soma (a, b){
    const adicao = Number(a) + Number(b)
    return adicao
}
console.log('Adição: ',soma(n1, n2))




function subtracao (a, b){
    const diminuicao = Number(a) - Number(b)
    return diminuicao
}
console.log('Subtração: ',subtracao(n1, n2))




function multiplicacao (a, b){
    const vezes = Number(a) * Number(b)
    return vezes
}
console.log('Multiplicação: ',multiplicacao(n1, n2))




function divisao (a, b){
    const dividir = Number(a) / Number(b)
    return dividir
}
console.log('Divisão:', divisao(n1, n2))