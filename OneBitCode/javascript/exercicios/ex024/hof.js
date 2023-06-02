function calcular(a, b, operação) {
   console.log(`Realizando uma operação`);
   let resultado = operação(a, b) // somar (3, 5)
   return resultado
}

function somar(x, y) {
   console.log(`Realizando uma soma.`);
   return x + y
}

console.log(calcular(3, 5, somar))


// Outra forma de usar High Order Functions

console.log (calcular(8, 4, function (x, y) {
   console.log(`Realizando uma subtração.`);
   return x - y
}))

// Uso no dia a dia 
function exibirElementos(elemento, índice, array) {
   console.log({
      elemento,
      índice,
      array
   });
}

let lista = ["Maça", "Laranja", "Banana", "Limão"]

// Jeito certo

lista.forEach(exibirElementos) //(Elemento, índice, array)

// Jeito menos utilizado

for (let i = 0; i < lista.length; i++) {
   exibirElementos(lista[i], i, lista);
}






