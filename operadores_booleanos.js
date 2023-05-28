// operasdores boobleanos

// Igualdade; == (ou ===)
// Diferente; != (ou !==)
// Menor que; <
// Menor ou igual; <=
// Maior que; >
// Maior ou igual; >=
// atribuição =

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == '10')
console.log(10 == '10')
console.log(10 === '10')

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')

//conjuções Lógicas

let idade = 16;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH == true

console.log('possoDirigir?', possoDirigir)

// OR => || sinal de ou

idade = 40;

const votoFacutativo = idade < 18 || idade >= 70

// NOT => !

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)


