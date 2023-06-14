const vagas = []

function listarVagas() {
   const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, índice){
      //1. nome, x de candidatos
      textoFinal += `\n${índice}. `
      textoFinal += vaga.nome
      textoFinal += ` (${vaga.candidatos.length} candidatos.)`
      return textoFinal
   }, "")

   alert(vagasEmTexto)
}

function novaVaga() {
   const nome = prompt(`Informe um nome para vaga:`)
   const descrição = prompt(`Informe uma descrição para a vaga:`)
   const dataLimite = prompt(`Informe uma data limite (dd/mm/aaaa) para a vaga:`)

   const confirmação = confirm(`
   Deseja criar uma nova vaga com essa informação:
   Nome: ${nome}
   Descrição: ${descrição}
   Data Limite: ${dataLimite}
   `)

   if (confirmação) {
      const novaVaga = {nome, descrição, dataLimite, candidatos: []}
      vagas.push(novaVaga)
      alert(`Vaga Criada.`)
   }
}

function exibirVaga() {
   const índice = prompt(`Informe o índice da vaga que deseja exibir:`)
   if (índice >= vagas.length || índice < 0) {
      alert(`Índice inválido`)
      return
   }
   
   const vaga = vagas[índice]
   
   const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
      return textoFinal + "\n - " + candidato
   }, "")
   
   alert(`
   Vaga: ${índice}
   Nome: ${vaga.nome} 
   Descrição: ${vaga.descrição}
   Data Limite: ${vaga.dataLimite}
   Quantidade de candidatos: ${vaga.candidatos.length}
   Candidatos inscritos: ${candidatosEmTexto} 
   `)
}

function inscreverCandidato() {
   const candidato = prompt(`Informe o nome do candidato(a):`)
   const índice = prompt("Informe o índice da vaga para qual o(a) candidato(a) Deseja se inscrever:")
   const vaga = vagas[índice]
   const confirmação = confirm(`
   Deseja inscrever o candidato ${candidato} na vaga ${índice}?
   Nome: ${vaga.nome} 
   Descrição: ${vaga.descrição}
   Data Limite: ${vaga.dataLimite}
   `)

   if (confirmação) {
      vaga.candidatos.push(candidato)
      alert(`Inscrição realizada.`)
   }
}

function excluirVaga() {
   const índice = prompt(`Informe o índice da vaga que deseja excluir:`)
   const vaga = vagas[índice]

   const confirmação = confirm(`
   Tem certeza que deseja excluir a vaga ${índice}
   Nome: ${vaga.nome} 
   Descrição: ${vaga.descrição}
   Data Limite: ${vaga.dataLimite}
   `);

   if (confirmação) {
      vagas.splice(índice, 1)
      alert(`Vaga excluída`)
   }
}

function exibirMenu() {
   const opção = prompt(`
   Cadastro de vagas de emprego
   
   O que deseja?
   1- Listar vagas disponíveis
   2- Criar uma nova vaga
   3- Visualizar uma vaga
   4- Inscrever um candidato em uma vaga
   5- Excluir uma vaga
   6- Sair
   `)    
   
   return opção
}

function executar() {
   let opção = ""

   do {
      opção = exibirMenu()
      
      switch (opção) {
         case "1":
            listarVagas()
           break
         case "2":
            novaVaga()
            break;
         case "3":
            exibirVaga()
            break;
         case "4":
            inscreverCandidato()
            break;
         case "5":
            excluirVaga()
            break;
         case "6":
            alert(`Você saiu!`);
            break;
         default:
            alert(`Número inválido tente novamente! `);
       }
   } while (opção !== "6")
}