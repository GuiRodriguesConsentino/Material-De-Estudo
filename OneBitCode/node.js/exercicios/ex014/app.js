// install npm nodemon

const express = require("express");
const checkListRouter = require('./src/routes/checklist')
const app = express();

app.use(express.json());

// Aprendendo Rotas
app.use(checkListRouter)

app.get('/json', (req, res) => {
   res.json({title: 'Tarefa X', done: true})
})