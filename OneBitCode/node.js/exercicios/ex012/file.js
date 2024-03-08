const fs = require('fs');

// WriteFile - Escrever arquivo ["NOME DO ARQUIVO", "CONTEÚDO", "FUNÇÃO COM POSSÍVEL ERRO"]
fs.writeFile('test.txt', 'Olá NodeJs', err => {
   console.log(err);
})

// AppendFile - Acrescenta texto no WriteFile
fs.appendFile("\ntest.txt", "Esse aqui é um text", (err) => {
  console.log(err);
});

// RENAME - Renomear o arquivo ["ARQUIVO QUE DESEJA ALTERAR", "ALTERAÇÃO", "FUNÇÃO COM POSSÍVEL ERRO"]
fs.rename("text.txt", "index.txt", err => console.log((err)))

// DIRNAME - CAMINHO DO DIRETÓRIO ATUAL
console.log(__dirname);