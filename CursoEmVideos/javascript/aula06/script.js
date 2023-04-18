function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('img')
   var date = new Date()
   var hora = date.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora < 12) {
      msg.innerHTML += ` Bom Dia!`
   } else if (hora >= 12 && hora < 18) {
      msg.innerHTML += ` Boa Tarde!`
      img.innerHTML = `<img src="img/tarde.png" alt="Foto Tarde">`
      document.body.style.background = "orange"
   } else {
      msg.innerHTML += ` Boa Noite!`
      img.innerHTML = `<img src="img/noite.png" alt="Foto Noite">`;
      document.body.style.background = 'black'
   }
}