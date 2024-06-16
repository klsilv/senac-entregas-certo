// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	let cadastro = {
		nome: prompt("Qual o nome do abrigo?").trim(),
		endereco: prompt("Qual o seu endereço?").trim(), 
		telefone: prompt("Qual é o seu telefone?").trim(),
		cidade: prompt("Qual é a sua cidade?").trim(),
		capacidadeDeLotacao: prompt("Qual é a capacidade de lotação?").trim()
	}
	console.log("Cadastrado com sucesso.")
	dados.push(cadastro)
}


// Função para listar
function listar() {
	console.log("Lista de abrigos.")
	console.log("Código | Nome | Endereço | Telefone | Cidade | Capacidade de lotação")
	
	for (const [ indice, dado ] of dados.entries()){
		console.log(`${indice+1} | ${dado.nome} | ${dado.endereco} | ${dado.telefone} | ${dado.cidade} | ${dado.capacidadeDeLotacao}`)

	}

	console.log("------------")
}


// Função para buscar
function buscar() {
	let cidadeBusca = prompt("Digite o nome da cidade para buscar um abrigo.").toUpperCase().trim()
	
	for (const [ indice, dado ] of dados.entries()){
		if(cidadeBusca === dado.cidade.toUpperCase().trim()){
			console.log("Código | Nome | Endereço | Telefone | Cidade | Capacidade de lotação")
			console.log(` ${indice+1} | ${dado.nome} | ${dado.endereco} | ${dado.telefone} | ${dado.cidade} | ${dado.capacidadeDeLotacao}`)

		}
	}
	console.log("------------")
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// perguntar ao usuário
while (continuar) {
	 
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"

		pergunta += "Escolha uma opção:\n"

		pergunta += "1. Cadastrar abrigo\n"

		pergunta += "2. Listar abrigos\n"

		pergunta += "3. Procurar abrigo\n"

		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}
}