let pokemon = "Charmander"

function evoluir() {
   pokemon = "Charmeleon"
}

console.log(pokemon);
evoluir()
console.log(pokemon);

// Escopo interno não fica disponível no externo

function CriarAnimal() {
   let animal = "gato"
}

CriarAnimal()
console.log(animal);

