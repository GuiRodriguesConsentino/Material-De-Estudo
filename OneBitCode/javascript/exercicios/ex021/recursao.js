// Chamando a mesma função na própria função.
function dividir(num) {
   console.log(num);
   if (num % 2 === 0) {
      dividir(num / 2)
   } else {
      return num
   }
}

dividir(256)

// A função só acaba quando não tiver mais chamada.

function dobrar(num) {
   console.log(num);
   dobrar(num * 2)
}

//dobrar(1     ) Chamada infinita 

// Um jeito de usar recursão

// fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
   console.log(`Numero: ${num}`);
   if (num === 0) { // Caso base
      return 1
   } else if (num === 1) {
      return 1
   } else {
      console.log(`${num}* !${(num - 1)}`);
      return num * fatorial(num - 1)
   }
}

console.log(fatorial(5));
