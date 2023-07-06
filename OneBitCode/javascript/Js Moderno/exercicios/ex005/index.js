function sum(...numbers) {// rest precisa ser o ultimo
   return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1));
console.log(sum(20, 2, 4 , 6, 4, 67));