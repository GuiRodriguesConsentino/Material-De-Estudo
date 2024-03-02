const fs = require("node:fs")

fs.unlink("arquivo.csv", (error) => {
   if (error) {
     console.log("Error ao excluir o arquivo:", error.message);
     return;
   }

   console.log("Arquivo excluído com sucesso!");
})