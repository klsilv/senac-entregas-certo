
function info (){
    sobreMim =(`Eu sou Kaua, tenho 16 anos, moro em São Leopoldo e sou estudante`)
    return sobreMim
}
console.log(info())

const nome = prompt('Qual é o seu nome?')
const idade = Number(prompt('Qual é a sua idade?'))
const cidade = prompt('Onde você mora?')
const profissao = prompt('Qual a sua profissão?')

function infos (){
    const informaçao = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return informaçao
}
console.log(infos())