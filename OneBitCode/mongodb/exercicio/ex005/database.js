// CONFIG DO MONGOOSE
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongoose://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => console.log('Conectado ao MongoDB'))
 .catch((err) => console.log(err));