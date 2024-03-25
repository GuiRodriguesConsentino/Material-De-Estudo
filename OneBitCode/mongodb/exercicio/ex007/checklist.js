// MODELS E AS ROTAS

router.post('/', async (req, res) => {
   let { name } = req.body;
   
   try {
      let checklist = await Checklist.create({ name });
      res.status(200).json(req.body);
   } catch (error) {
    res.status(422).json(error)  
   }
})
