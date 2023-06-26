// Mudar Valor
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
   input.value = input.value === '' ? 'Olá Mundo!' : ''
   input.getAttribute('value') // Valor pré definido
})

// Mudar o tipo
document.getElementById('type').addEventListener('click', function() {
   input.type = input.type !== 'radio' ? 'radio' : 'text'
})

// Mudar Placeholder
document.getElementById('placeholder').addEventListener('click', function() {
   input.placeholder = 'Digite algo...'
})

// Desabilitar / Habilitar 
document.getElementById('disable').addEventListener('click', function() {
   input.setAttribute('disabled', !input.disabled)
})

// Mostrar Dados
document.getElementById('data').addEventListener('click', function() {
   const data = input.dataset.something
   console.log('O valor do atributo data-something é: ' + data);
   input.dataset.something = "Algum outro valor"
   console.log("O valor do atributo data-something agora é: " + data);
})