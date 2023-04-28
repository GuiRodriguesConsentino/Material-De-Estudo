   let amigo = {nome: 'Gui', sexo: 'm', peso: 60, engordar(p=0){
      console.log('Engordou');
      this.peso += p
   }}

   amigo.engordar(10)
   console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);