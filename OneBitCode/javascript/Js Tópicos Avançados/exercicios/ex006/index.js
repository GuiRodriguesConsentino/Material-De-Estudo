function execute() {
   // faz alguma coisa
   return new Promise((resolve, reject) => {
       console.log("A promise está sendo executada.");
       setTimeout(() => {
        if (true) {
          reject(false)
        } else {
         console.log("Resolvendo a promise...");
         resolve(42);
        }
       }, 1000 * 2);
   }) 
}

const p = execute()

p.then((result) => { // permite ter acesso ao resultado (pega o resultado do 'resolve')
  console.log(`A promise foi resolvida. O resultado foi ${result}`)
}).catch((err) => { // permite ter acesso do erro (pega o resultado do 'reject')
  console.log(`A promise foi rejeitada! Motivo ${err}`);
}).finally(() => { // código realizado independente do resultado
  console.log('A promise foi finalizada.');
})