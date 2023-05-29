// OBJETOS

// COMO CRIAR UM OBJETO NO JAVASCRIPT

let pessoa = {
  nome: 'Eduardo',
  idade: 43,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

// add um par de chaves-valor

pessoa.altura = 1.87
console.log(pessoa)

//remover um par de chaves-valor
delete pessoa.altura
console.log(pessoa)

//como percorrer
console.clear()

for (let chave in pessoa) {
  console.log(chave)
}