let liretal: 'Hello, World!' 
let pi: 3.12159

let option: "Yes" | "No" | "Maybe"

let option2: number | boolean

//--//--//--//--//--//

type Planet = 'Mercúrio' | 'Vênus' | 'Terra' | 'Marte' | 'Júpiter' | 'Saturno' | 'Urano' | 'Netuno' | 'Plutão'
let planet: Planet

let homePlanet: Planet

function checkPlanet(planet: Planet) {
   if (planet === "Terra") {
   console.log('Estamos na Terra');
   }
}

//--//--//--//--//--//

type GreetingCallback = (name: string) => void

function Greet(callbackfn: GreetingCallback) {
   let name = 'Gui'
   callbackfn(name)
}