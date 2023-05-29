function dobro(x) {
   x = prompt(`Insira um valor!`)
   alert(`O dobro de ${x} é ${x * 2}`)
}

//dobro()

function DizerOla(nome) {
   nome = prompt(`Qual é seu nome?`)
   alert(`Olá ${nome}!`)
}

//DizerOla()

function soma(a, b) {
   a = Number(prompt(`Insira o valor de A`))
   b = Number(prompt(`Insira o valor de B`))
   alert(`Resultado da soma é ${a + b}`)
}

//soma()

//Se tiver um valor opcional deixe por ultimo
function criarUsuário(nome, email, senha, tipo = "admin") {
   nome = prompt(`Qual é o seu nome?`)
   email = prompt(`Insira seu email ${nome}.`)
   senha = prompt(`Crie uma senha.`)
   const usuário = {
      nome, // mesmo que nome: nome
      email, 
      senha,
      tipo
   }
   console.log(usuário); 
}

//criarUsuário()


//jeitos de fazer quando tiver muitos parâmetros
function muitosParâmetros(nome, telefone, endereço, aniversário, email, senha) {
   const DadosDoUsuário = {
   nome: "",
   telefone: "",
   endereço: "",
   aniversário: "",
   email: "",
   senha: ""
   //...
   }
}


function ObjetoComParâmetros(usuário) {
   usuário.nome
   usuário.email
   //... 
}

ObjetoComParâmetros(DadosDoUsuário)