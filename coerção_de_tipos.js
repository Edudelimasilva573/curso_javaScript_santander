// > COERÇÃO (CONVERSÃO) DE TIPOS

// -1 Coerção Explicita (Manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

 // CONVERTENDO PARA TEXTO P/ NUMERO UTILIZAR O NUMBER
console.log(Number('1213215'))

console.log(parseFloat('3232.4654'))
console.log(Boolean(1))       // quando coloca 1 true quando colocar 0 false

console.clear()

// -2 Coerção Implicita (Automática)


console.log(10 + '1');// ele vai concatenar juntar 10e1 = 101 ele entende que é texto // const numero = 10
console.log('10' - 1);     // quando tem o sinal de - ele entende que é numero e subtrai
console.log(10 * '3');     // ele entende que é numero e o numero multiplicador
console.log(10 - 'asasa');     // ele entende que não é um numero NaN

// qual sera a saida desse codigo?

let n = 1 + '1'; // '11'

n = n - 1; //'10'

console.log(n);

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log(2 + 3 + 4 + '5'); // '95'

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log('5' + 2 + 3 + 4); // vai dar o texto 5234

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log('10' - '4' - 3 - 2 + '5'); // '15' resposta texto"10"-4=6 - 3= 3-2 = 1+ "5"=15

