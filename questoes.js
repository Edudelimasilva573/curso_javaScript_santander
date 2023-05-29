//while (true) {
 // console.log("Olá, mundo");
//}

console.clear()

//for (let i = 0; i <= 9; i += 2) {
//  console.log(i);
//}

console.clear()

//var array = [2, 5, 9];
//console.log(array.indexOf(2));
//console.log(array.indexOf(7));
//console.log(array.indexOf(9, 2));

console.clear()

function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return acc / array.length;
}

console.log(funcao([4, 6, 4, 2]));