// Com ? no copilot deixa ele OPCIONAL
function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  // ... EXEMPLO
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });

sendSpaceship({ pilot: "Luke" });



// UNKNOWN deixa você atribuir qualquer tipo de atributo 
let input: unknown

input = 'Test'
input = 10
input = []

let text: string

//text = input  | ERROR porque TEXT não tem garantia que o INPUT retorne uma STRING 



// ANY te deixa sem restrições ( Não recomendado utilizar no TypeScript )
let Test: any

input = 'Test'
input = 10
input = []

let exemplo: string

exemplo = Test 



// NEVER não permite atribuir elemento
function verification(test) {
   if (test) {
      // ... EXEMPLO
   } else {
      let check: never
   }
}