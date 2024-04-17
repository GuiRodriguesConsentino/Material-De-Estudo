const express = require('express')

const router =require.Router()

router.get('/', async (req, res) => {
   res.render('pages/index')
});

module.exports = router