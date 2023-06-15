function show() {
   const contactList = document.getElementById('contact-list')
   console.log(contactList); // Selecionar ID HTML

   const listElements = document.getElementsByTagName('li')
   console.log(listElements); // Selecionar elementos HTML

   const contactInputs = document.getElementsByClassName('contact-input') // Selecionar classes HTML
   console.log(contactInputs);

   const contacts = document.querySelectorAll('#contact-list > li > label') // Selecionar elementos mais específicos 
   console.log(contacts);

   const contact1 = document.getElementsByName('contact1')
   console.log(contact1); // Selecionar o nome de um elemento HTML

   const firtContact = document.querySelector('#contact-list > l1 > label') // Seleciona o primeiro elemento que tiver 
   console.log(firtContact);
}
