// JEITO MAS TRABALHOSO DE FAZER

// process.stdout.write("Olá, mundo!")

// process.stdin.on("data", (data) => {
//    process.stdout.write(`Você digitou: ${data}`)
// })

//-----------------------------
// JEITO MAIS PRATICO

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.on("line", (input) => {
   rl.write(`Você digitou: ${input}`)
})

//-----------------------------
// QUESTION ACONTECE APENAS UMA VEZ
// CLOSE SÓ ENCERRA, SE NÃO HOUVER NADA PENDENTE

rl.question("Qual é o seu nome?\n", (answer) => {
   rl.write(`Olá ${answer}!\n`)
   rl.close()
})

rl.on("close", () => {
   rl.write("Saindo...")
   // MELHOR FORMA DE ENCERRAR O PROCESSO
   process.exit(0)
})

// SIGINT BASICAMENTE O CTRL + C
rl.on("SIGINT", () => {
   rl.question("Deseja mesmo sair? (s/n)", (answer) => {
      if(answer.trim().toLowerCase === "s"){
         process.exit(0)
      } else {
         rl.write("Você escolheu continuar.")
      }
   });
})