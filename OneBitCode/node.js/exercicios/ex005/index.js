const os = require("node:os");

// Plataforma identifica o sistema operacional
const plataform = os.platform()
console.log("Plantaforma do SO:", plataform);

// Arquitetura do sistema operacional
const arch = os.arch()
console.log("Arquitetura do SO:", arch);

// Saber sobre o núcleos do processador
const cpus = os.cpus()
console.log("Informações da CPU:", cpus);

// Total de memória do sistema operacional (freemen = memória livre)
const memory = os.totalmem()
console.log("Total de memória do PC", memory / 1024 / 1024 / 1024, "GB");