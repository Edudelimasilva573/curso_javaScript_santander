//Funcoes
// DEFINIÇAO DA FUNCAO
function saudacao() {
  console.log('Bem vindo ao curso de JavaScript')
}

saudacao()
console.clear()

// COMO ENVIAR PARAMETROS PARA AS FUNÇÕES

function saudacao(nome, curso='JavaScript') {
  
  console.log(`Bem vinda(o) ${nome} ao curso de ${curso}! `);
}

saudacao('Eduardo'); // tem que passar o parametro para não ficar no underfined

console.clear()

//retorno da função

function soma(numero1, numero2) {
  return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado)

console.clear()





