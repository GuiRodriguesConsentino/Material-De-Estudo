let arr = ["Frodo","Sam","Merry","Pippin","Gandalf","Aragorn","Legolas","Gimli",]
console.log(arr)

// Pesquisar por um Elemento
// includes (Pesquisar se existe ou não na array)
let inclui = arr.includes("Gandalf"); // true
console.log(inclui);

inclui = arr.includes("Teste"); // false
console.log(inclui);

// IndexOf (Pesquisar o tipo do elemento)
let indice = arr.indexOf("Gandalf");
console.log(indice);


