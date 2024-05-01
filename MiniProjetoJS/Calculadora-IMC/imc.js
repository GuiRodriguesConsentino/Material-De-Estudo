const Calcular = document.getElementById('calcular')

Calcular.addEventListener('click', imc => {
   const Nome = document.getElementById("nome").value;
   const Altura = document.getElementById("altura").value;
   const Peso = document.getElementById("peso").value;
   const Resultado = document.getElementById("resultado");

   if (Nome !== "" && Altura !== "" && Peso !== "") {
      const valorIMC = (Peso / (Altura * Altura)).toFixed(2)

      let classificação = ""

      if (valorIMC < 18.5) {
         classificação = 'abaixo do peso.';
      } else if (valorIMC < 25) {
         classificação = 'com peso ideal. Parabéns!!!';
      } else if (valorIMC < 30) {
         classificação = 'levemente acima do peso.';
      } else if (valorIMC < 35) {
         classificação = 'com obesidade grau I.';
      } else if (valorIMC < 40) {
         classificação = 'com obesidade grau II';
      } else {
         classificação = 'com obesidade grau III. Cuidado';
      }

      Resultado.textContent = `${Nome} seu IMC é ${valorIMC} e você está ${classificação}`
   } else {
      Resultado.textContent = "Preencha todos os campos!!!"
   }
})