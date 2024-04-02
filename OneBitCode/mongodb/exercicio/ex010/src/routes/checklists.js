// ATUALIZAÇÃO E REMOÇÃO DE DADOS

const { Router } = require("express");
const router = express.Router();
const Checklist = require("../models/checklist");

Router.put("/", async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = await Checklist.findById(req.params.id)

  try {
    let checklist = await checklist.update({ name });
    res.redirect('/checklists');
  } catch (error) {
    let erros = error.errors;
    res.status(422).render('checklists/edit', {checklist: {...checklist, erros}})
  }
});

Router.delete("/:id", async (req, res) => {
  try {
      let checklist = await Checklist.findByIdAndRemove(req.params.id);
      res.redirect('/checklists')
  } catch (error) {
      res.status(500).render('pages/error', {error: 'Erro ao delete a Lista de tarefa'})
  }
});
