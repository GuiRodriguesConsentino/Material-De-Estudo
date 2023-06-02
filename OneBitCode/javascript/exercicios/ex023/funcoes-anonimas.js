// Perigo das função anônimas

olaMundo();
oiMundo();

function olaMundo() {
  console.log("Olá, mundo !");
}

const oiMundo = function () {
  console.log("Oi, mundo");
};

oiMundo();
