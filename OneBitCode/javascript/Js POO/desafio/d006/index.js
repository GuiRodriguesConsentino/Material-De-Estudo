const App = require('./App')

App.createUser('gui@gmail.com', 'Guilherme Rodrigues')
App.createUser("lucas@gmail.com", "Lucas Pontes");
App.createUser("juliana@gmail.com", "Juliana Paes");

App.deposit("gui@gmail.com", 100);

App.transfer("gui@gmail.com", "lucas@gmail.com", 20);

App.changeLoanFee(10)
App.takeLoan("juliana@gmail.com", 2000, 24);

console.log(App.findUser("gui@gmail.com"));
console.log(App.findUser("gui@gmail.com").account);
console.log(App.findUser("lucas@gmail.com"));
console.log(App.findUser("lucas@gmail.com").account);
console.log(App.findUser("juliana@gmail.com"));
console.log(App.findUser("juliana@gmail.com").account);
console.log(App.findUser("juliana@gmail.com").account.loans[0].installments);