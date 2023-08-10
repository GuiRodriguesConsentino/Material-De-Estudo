console.log("Programa iniciado!");

const timeoutId = setTimeout(() => {
   console.log("3 segundos se passaram desde que o programa foi iniciado.");
}, 1000 * 3)

clearTimeout(timeoutId) //Encera o setTimeout

// setInterval

let seconds = 0
const intervalId = setInterval(() => {
   seconds += 3
   console.log(`Se passaram ${seconds}`);
   if (seconds > 12) {
      clearInterval(intervalId)
      console.log('Tempo esgotados! Encerrando...');
   } 
}, 1000 * 3)

