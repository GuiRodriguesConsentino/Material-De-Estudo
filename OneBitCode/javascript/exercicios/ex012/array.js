let arr = ["Frodo","Sam","Merry","Pippin","Gandalf","Aragorn","Legolas","Gimli",]
console.log(arr)

// slice (Cortar)
const hobbits = arr.slice(0, 4)
console.log(hobbits)

outros = arr.slice(-4) // Sinal de - começa pelo final.
console.log(outros);

// concat (Concatenar)
const sociedade =  hobbits.concat(outros, "Boromir")
console.log(sociedade);

// Substituição dos  Elementos
// splice (Remover um grupo de Array e substituir por outros)
const elementosRemovidos = sociedade.splice(4, 1, "Gandalf, o Cinzento")
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
   const elemento = sociedade[indice]
   console.log(`${elemento} se encontra na posição ${indice}`);
}