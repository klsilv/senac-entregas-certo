//1
function soma (a, b){
    const adicao = a + b
    return adicao
}
console.log(soma(10, 5))



//2
function maiorOuIgual (a, b){
    const maiorOuIguais = a >= b
    return maiorOuIguais
}
console.log(maiorOuIgual(10, 5))




//3
function parOuImpar (a){
    const par = (a % 2) === 0
    return par
}
console.log(parOuImpar(10))



//4
function mensagem (texto){
    const tamanho = texto.length
    const maiuscula = texto.toUpperCase()

    console.log(tamanho, maiuscula)
}
mensagem('aprendi coisas novas hoje)
