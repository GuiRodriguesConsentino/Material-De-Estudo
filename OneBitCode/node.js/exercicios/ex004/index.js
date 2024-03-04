const path = require("node:path")

const dir ="src"
const file = "app.js"

// Dirname obtém o caminho absoluto do diretório atual. 
// Join junta o caminho
const fullPath = path.join(__dirname, "dir", "file")

const relativePath = path.join(".", dir, file)

console.log(fullPath);
console.log(relativePath);

//---------------------------------------------------------

const relativesPath = "../arquivo/relatorio.pdf"

// Ajuda encontrar o caminho de forma segura.
const absolutePath = path.resolve(__dirname, relativesPath)

console.log(absolutePath);

//---------------------------------------------------------

// Mostra a base do caminho
const fileName = path.basename(relativesPath)
console.log(fileName);

//---------------------------------------------------------

// Nome da extensão
const ext = path.extname(absolutePath)
console.log(ext);