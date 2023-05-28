// laços condicionais

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number (input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado) {
  console.log('Voce errou o numero. tente novamente...')

  numero = Number(input.question("Qual numero voce escolhe?"));
  
}

console.log('Voce acertou!!!!');

