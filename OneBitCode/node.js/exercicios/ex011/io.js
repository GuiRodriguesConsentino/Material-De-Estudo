const process = require(`process`)

// ARGV - Argumentos do Script
console.log(process.argv);

//----------------------------------------------

console.log("Digite seu nome:");
// STDOUT - Exibir informações
// STDIN - Usuário entrar com informação
process.stdin.on("data", (keyboard) => {
   console.log(process.stdout.write(`Texto do usuário ${keyboard}`));
   // EXIT - encerra o terminal
   process.exit()
});