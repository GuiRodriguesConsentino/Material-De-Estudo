const a = 0 // Zero é considerado como false no ||

const b = null // Null é considerado como false

const c = "Teste" 

console.log(a || b || c);

// Com ?? apenas null ou undefined são considerados false
console.log(a ?? b ?? c);


// Fazendo outros teste
let num1 = 0

let num2 = num1 || 42

console.log({num1, num2});

num2 = num1 ?? 42 

console.log({num1, num2});

num3 = null ?? 42

console.log({c});