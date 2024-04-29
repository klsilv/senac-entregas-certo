let nome 
let idade
console.log("tipo do nome:", typeof nome)
console.log("tipo de idade:", typeof idade)
//por um curto tempo sem tipo então tipo indefinido//

nome = prompt("qual é o seu nome?")
idade = prompt("qual é a sua idade?")

console.log("tipo do nome:", typeof nome)
console.log("tipo de idade:", typeof idade)

// nome e idade são strings
// porque os seus valores foram atribuidos atraves do prompt
// prompt sempre retorna uma string


console.log("olá", nome, "você tem", idade, "anos")
