
let listaDeTarefas = []

const tarefa01 = prompt('Digite tafera 1')
const tarefa02 = prompt('Digite tafera 2')
const tarefa03 = prompt('Digite tafera 3')

listaDeTarefas.push(tarefa01, tarefa02, tarefa03)

console.log(listaDeTarefas)

let i = Number(prompt('Digite um numero de 1 a 3 correspondente a tarefa que já realizou.'))
i = i - 1

listaDeTarefas.splice(i, 1)

console.log(listaDeTarefas)
