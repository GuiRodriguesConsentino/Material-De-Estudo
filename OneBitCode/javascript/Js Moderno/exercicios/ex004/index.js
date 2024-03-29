const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns);
console.log(...towns);
console.log(...towns[0]); // console.log(P, r, o, n, t, e, r, a)

// Jeito de clonar errado
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy});

// Clonando com spread

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone});

// Spread em Objetos

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'Test'

console.log({townsObj, townsObjClone});
