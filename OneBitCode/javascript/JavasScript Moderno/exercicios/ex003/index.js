// Desestruturando um Objeto
const person = {
   name: "Luke",
   job: "Farmer",
   parents: ["Anakin", "Padme"]
}

// Forma tradicional
const name = person.name

// Usando Desestruturação

const { job, parents } = person

console.log(name, job, parents);

// Desestruturando um Array
const [father, mother] = parents

console.log(father, mother);

// Desestruturando uma function
function createUser({ name, job, parents}) {
   const id = Math.floor(Math.random() * 9999)
   return {
      id,
      name,
      job,
      parents
   }
}

const luke = createUser(person)
console.log(luke);