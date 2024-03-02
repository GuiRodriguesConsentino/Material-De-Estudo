const fs = require("node:fs")

// Const de teste
const filename = "arquivo.csv"

const exists = fs.existsSync("arquivo.txt")

if (exists) {
   fs.readFile("arquivo.txt", "utf-8", (error, data) => {
     if (error) {
       console.log("Error ao ler o arquivo:", error.message);
       return;
     }

     const entries = data.split(",");
     console.log(entries);
     entries.forEach((entry) => console.log(entries));
   });
} else {
   console.log("O arquivo não existe!");
}

// try {
//    const data = fs.readFileSync("./arquivo.txt", "utf-8")
//    console.log(data);
// } catch (error) {
//    console.log("Error ao ler o arquivo:", error.message);
// }