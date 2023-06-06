let personagens = [
  { nível: 42, nome: "Thrall", raça: "Orc", classe: "Xamã" },
  { nível: 28, nome: "Garrosh", raça: "Orc", classe: "Guerreiro" },
  { nível: 35, nome: "Varok", raça: "Orc", classe: "Guerreiro" },
  { nível: 35, nome: "Uther", raça: "Humano", classe: "Paladino" },
  { nível: 26, nome: "Jaina", raça: "Humano", classe: "Maga" },
  { nível: 39, nome: "Tyrande", raça: "Elfo Noturno", classe: "Sacerdotisa" },
  { nível: 29, nome: "Muradin", raça: "Anão", classe: "Guerreiro" },
];

// Sort (Ordenar Arrays)
// 1 , 2 , 3 , 7 , 3 , 0 (compara os elementos)

personagens.sort(function (a, b) {
   return a.nível - b.nível // Ordem Crescente 
})

console.log(personagens);

// Ordem decrescente (b.nível - a.nível)

// Filter (Filtrar elementos de arrays)

/* Resumindo o que o FILTER faz:
const orcs = []

for (let i = 0; i < personagens.length; i++) {
   if (personagens[i].raça === "Orc") {
      orcs.push(personagens[i])
   }   
}
*/

const orcs = personagens.filter(function (personagem) {
   return personagem.raça === "Orc"
})

console.log(orcs);