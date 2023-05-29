function calcularMédia(a, b) {
   let média = (a + b) / 2
   return média
}

const resultado = calcularMédia(7, 2)

console.log(resultado);

// Colando valor direto no console.log

function CriarProduto(nome, preço) {
   const produto = {nome, preço, estoque: 1}
   return produto
}

console.log(CriarProduto("Notebook Intel Core i3 8GB", 2500));

// Usando a mesma function

function areaRetangular(base, altura) {
   return base * altura
}

function areaQuadrada(lado) {
   return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5));

console.log(areaQuadrada(9))

// Vendo limite do return

function ola() {
   let text = "..."
   return text //A Função acaba no return...
   texto = "Olá mundo!"
   console.log(texto);
}

console.log(ola());

// Usando mais de um RETURN

function maioridade(idade) {
   if (idade >= 18) {
      return "Maior de idade"
   } else {
      return "Menor de idade"
   }
}

console.log(maioridade(29));
console.log(maioridade(13));