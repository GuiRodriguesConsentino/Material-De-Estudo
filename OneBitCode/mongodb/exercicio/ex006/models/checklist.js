const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
   name: {type: String, required: true},
   takes: [{ 
      mongoose.Schema.Type.ObjectId,
      ref: 'Task'
   }]
})

module.exports = mongoose.model('Checklist', checklistSchema)