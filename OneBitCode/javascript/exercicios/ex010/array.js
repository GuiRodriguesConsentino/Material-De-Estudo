let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionando Elementos
// Itens são adicionados conforme a sequencia 
// Push (Adicionar elemento no final da Array)
let tamanho = arr.push("Boromir");
console.log(arr)
console.log(tamanho);

// unshift (Adicionar elemento no começo da Array)
tamanho = arr.unshift("Odin")
console.log(arr);
console.log(tamanho)

// Remover Elementos
// pop (Remover elemento no final da Array)
let ultimoElemento = arr.pop()
console.log(arr);
console.log(ultimoElemento)

// shift (Remover elemento no começo da Array)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)
