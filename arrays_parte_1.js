// > arrays

// como criar um array?

let arr = [`eduardo`, 43, 1.87, true]

console.log(arr)

// como acessar os elementos do array

console.log('Primeiro elemento:', arr[0])
console.log("Segundo elemento:", arr[1]);
console.log("Terceiro elemento:", arr[2]);
console.log("Quarto elemento:", arr[3]);


// como obter o tamanho do array

console.log('tamando do array:', arr.length);

// percorrendo arrays

console.clear()

 for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
 }

 console.clear

 for (let element of arr) {
  console.log(element)
 }                                //ele percorre os elementos do arr


console.clear

for (let indices in arr) {
  console.log(indices, arr[indices])
}                                 //percorre os variaveis como os indices

