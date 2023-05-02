function gerar() {
   var num = document.getElementById('txtn')
   var tab = document.getElementById('seltab')
   if (num.value.legth == 0) {
     alert('Por favor, digite um número!') 
   } else {
     var n = Number(num.value)
     tab.innerHTML = ``;
     for (c = 1; c <= 10; c++) {
      var item = document.createElement('option')
      item.text = `${n} X ${c} = ${n*c}`
      tab.appendChild(item)
      
     }
   }
   
}