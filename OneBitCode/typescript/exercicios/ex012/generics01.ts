function first(array) {
   return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
   return array[array.length -1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

const firstPilot = first(pilots)

const lastPilot = last(pilots) // Com generic a função reconhece o tipo do elemento.