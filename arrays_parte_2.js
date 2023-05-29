// arrays- parte 2 - metodo de arrays - sempre tem parenteses no final

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

//fatiamneto slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2));

console.clear()

//adicionando elemento: push | unshift

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log("Depois de adicionar:", arr2);   // push joga para o final

console.log("Antes de adicionar com unshift:", arr2);

arr2.unshift(0)
console.log('Depois de adicionar com unshift:', arr2)   //unshift joga para o inicio

console.clear()

//removendo elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:', arr2)  // o ultimo elemento foi removido
console.log('O elemento removido foi', elementoRemovido) // o elemento removido

console.clear()

//concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)   //ele junta o arr1 + arr2 e concatenando

console.log(arr1.concat(arr2))

console.clear()

//buscando elementos: indexOf | lastIndexOf

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3)) //Ele procura o resultado de tras para a frente res = 5

//console.log(arr3.indexOf(3)) resultado 3

console.clear()

//Descobrindo a existencia de um elemento: includes

console.log(arr1)
console.log(arr1.includes(12)) // ele procura pelo valor e retorna o resultado verdadeiro

console.clear()

//Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)