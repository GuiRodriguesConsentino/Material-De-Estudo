const express = re = require('express');
const path = require('path')

const checkListRouter = require('./src/routes/checklist');
const taskRouter = require("./src/routes/task");

const rootRouter = require('./src/routes/index');
require('./database')

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method', {methods: ['POST', 'GET']}))

use.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use("/checklists", rootRouter);
app.use('/checklists', checkListRouter.checklistDepedent);
app.use("/checklists", taskRouter);

app.listen(3000, () => {
   console.log('Servidor foi iniciado');
})