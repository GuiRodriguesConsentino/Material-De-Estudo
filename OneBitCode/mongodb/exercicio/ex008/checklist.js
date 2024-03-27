// LISTANDO DADOS NO MODEL

const { Router } = require("express");

Router.get('/', async (req, res) => {
   try {
      let checklist = await Checklist.find({});
      res.status(200).json(checklist)
   } catch (error) {
     res.status(500).json(error);    
   }
})