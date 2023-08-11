console.log("Programa iniciado!");

const timeoutId = setTimeout(() => {
   console.log("3 segundos se passaram desde que o programa foi iniciado.");
}, 1000 * 3)

//clearTimeout(timeoutId) //Encera o setTimeout

let seconds = 0

setInterval(() => {
   console.log('Se passou mais 3 segundos.');
}, 1000 * 3)