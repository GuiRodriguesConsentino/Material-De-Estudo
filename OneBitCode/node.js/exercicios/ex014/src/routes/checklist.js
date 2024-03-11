const express = require('express')

const router = express.Router();

// GET | pegar informação
router.get('/checklist', (res, req) => {
   console.log('Olá');
   res.send()
})

// POST | receber informação da chamada
router.post('/', (req, res) => {
   console.log(req.body);
   res.status(200).send(req.body)
})

// /:id | esperando um parâmetro id
router,get('/:id',(req, res) => {
   console.log(req.params.id);
   res.send(`ID: ${req.params.id}`);
})

// PUT | Atualizar Servidor
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})

// DELETE | excluir algo
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;