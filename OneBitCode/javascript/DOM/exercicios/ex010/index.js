// Session Storage obs(Perde as informações após aba for fechada)

document.getElementById('sessionBtn').addEventListener('click', function() {
   const input = document.getElementById('session')
   window.sessionStorage.setItem('info', input.value)
   input.value = ""
})

document.getElementById('readSession').addEventListener('click', function() {
   const info = sessionStorage.getItem('info')
   alert(`A informação salva é:\n${info}`)
})

// Local Storage obs(Mantém a informação no aparelho)

document.getElementById('localBtn').addEventListener('click', function() {
   const input = document.getElementById('local')
   window.localStorage.setItem('text', input.value)
   input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
   const text = localStorage.getItem('text')
   alert(`A informação salva é:\n${text}}`)
})

// Cookies obs(O usuário tem controle se mantém ou não os dados)

document.getElementById('cookieBtn').addEventListener('click', function() {
   const input = document.getElementById('cookie')
   // cookieName=value; expires=UTCStringDate; path=/
   const cookie = 'info=' + input.value + ';'
   const expiration = 'expires' + new Date(2023, 9, 9) + ';'
   const path = 'path=/;'
   document.cookie = cookie + expiration + path
   input.value = ''
})

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/
  const cookie = "text=" + input.value + ";";
  const expiration = "expires" + new Date(2023, 8, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
});


