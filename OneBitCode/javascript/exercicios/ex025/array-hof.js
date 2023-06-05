let personagens = [
   {nível: 42, nome: "Thrall", raça: "Orc", classe: "Xamã"},
   {nível: 28, nome: "Garrosh", raça: "Orc", classe: "Guerreiro"},
   {nível: 35, nome: "Varok", raça: "Orc", classe: "Guerreiro"},
   {nível: 35, nome: "Uther", raça: "Humano", classe: "Paladino"},
   {nível: 26, nome: "Jaina", raça: "Humano", classe: "Maga"},
   {nível: 39, nome: "Tyrande", raça: "Elfo Noturno", classe: "Sacerdotisa"},
   {nível: 29, nome: "Muradin", raça: "Anão", classe: "Guerreiro"}
]

// Map (Transformação em Arrays)

/* Resumindo o que o MAP faz:
const nomes = []  

for (let i = 0; i < personagens.length; i++) {
   nomes.push(personagens[i].nome);
}
*/

const nomes = personagens.map(function (personagem) {
   return personagem.nome
})

console.log(nomes)

// Reduce (Transformar os arrays em outros elementos)

const NívelTotal = personagens.reduce(function (valorAcumulado,  personagem){
   return valorAcumulado + personagem.nível
}, 0)

console.log(NívelTotal);

// Usando Reduce para mudar estrutura do Array

const raças = personagens.reduce(function (valorAcumulado, personagem){
   if (valorAcumulado[personagem.raça]) {
      valorAcumulado[personagem.raça].push(personagem)
   } else {
      valorAcumulado[personagem.raça] = [personagem]
   }

   return valorAcumulado
}, {})

console.log(raças);