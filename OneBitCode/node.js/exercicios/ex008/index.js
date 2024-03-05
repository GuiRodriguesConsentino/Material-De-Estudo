// PROCESS.ARGV TRANSFORMA O TERMINAL EM ARRAY
const args = process.argv

const namedArguments = {}

// SLICE CORTA O ARRAY
process.argv.slice(2).forEach((arg, index, array)=> {
   if(arg.startWith("--")) {
      const argName = arg.slice(2)
      const argValue = array[index + 1]
      namedArguments[argName] = argValue 
   }
})

console.log("Argumentos Informados:", namedArguments);

// NO TERMINAL
// --nome Guilherme --job Developer