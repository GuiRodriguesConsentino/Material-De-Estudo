function AddContact() {
   const contactSection = document.getElementById('contacts-list')

   const h3 = document.createElement('h3')
   h3.innerText = `Contato`

   const ul = document.createElement('ul')

   const nameLi = document.createElement('li')
   nameLi.innerText = `Nome: `
   const nameInput = document.createElement('input')
   nameInput.type = 'text'
   nameInput.name = 'fullname'
   ul.appendChild(document.createElement("br"));
   
   nameLi.appendChild(nameInput)
   ul.appendChild(nameLi)

   const phoneLI = document.createElement("li");
   phoneLI.innerText = `Telefone: `;
   const phoneInput = document.createElement("input");
   phoneInput.type = "tel";
   phoneInput.name = "phone";
   ul.appendChild(document.createElement("br"));

   phoneLI.appendChild(phoneInput);
   ul.appendChild(phoneLI);

   const addressLi = document.createElement('li')
   addressLi.innerHTML = `<label for="address">Endereço: </label>`
   const addressInput = document.createElement('input')
   addressInput.type = 'text'
   addressInput.name = 'address'
   addressInput.id = "address"
   ul.appendChild(document.createElement("br"));
   
   addressLi.appendChild(addressInput)
   ul.appendChild(addressLi)

   contactSection.append(h3, ul)
}

function RemoveContact() {
   const contactSection = document.getElementById('contacts-list')

   const title = document.getElementsByTagName('h3')
   const contacts = document.getElementsByTagName('ul')

   contactSection.removeChild(title[title.length - 1])
   contactSection.removeChild(contacts[contacts.length - 1]);
}