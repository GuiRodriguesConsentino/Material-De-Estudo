// VAR e LET diferenças...

console.log(nome);
console.log(sobrenome);

var nome = "Guilherme" //Não atribui o valor
let sobrenome = "Rodrigues"

console.log(nome);
console.log(sobrenome);

// VAR nos escopos OBS  (utilizar sempre o let)

function AvaliarNota(nota) {
  if (nova > 60) {
    var aprovado = true;
    let situação = "Aprovado";
  } else {
    var aprovado = false;
    let situação = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado);
  console.log(situação);
}

AvaliarNota(83)
AvaliarNota(49);