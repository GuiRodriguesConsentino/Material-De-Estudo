const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
   ev.preventDefault()

   const nome = document.getElementById('name').value 
   const address = document.getElementById('address').value 
   const breadType = document.getElementById('breadType').value
   const main = document.querySelector('input[name="main"]').value
   const observations = document.querySelector('textarea[name="observations"]').value
   
   let salad = ''
   document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
      salad += ` - ${item.value}\n`
   })
   
   console.log({
   nome,
   address,
   breadType,
   main,
   salad,
   observations
   })

   alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + nome +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
   )
})


