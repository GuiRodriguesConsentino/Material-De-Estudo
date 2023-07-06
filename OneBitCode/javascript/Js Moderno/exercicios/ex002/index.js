// Função normal
function normalSum(a, b) {
   return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

// Função anonima 
const anonymousSum = function (a, b) {
   return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`);

// Arrow Function
const arrowSum = (a, b) => {
   return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

// Arrow Function melhorada
const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`);


const double = n => `O dobro de ${n} é ${n * 2}`
const num = 21

console.log(double(num));

// Caso de uso com Arrow Functions 
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffer']
const startingWithP = towns.filter(towns => town[0] === 'P')

console.log(startingWithP);