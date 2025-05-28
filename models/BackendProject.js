const mongoose= require('mongoose')

const backendSchema= new mongoose.Schema({
  image:{
    type: String,
    required: [true, 'Image is required']
  },

  title:{
    type: String,
    required: [true, 'Title is required']
  },

  description:{
    type: String,
    required: [true, 'description is required']
  },

   link:{
    type: String,
    required: true
  },

  github:{
    type: String,
    required: true
  }
}, {timestamps:true})

module.exports= mongoose.model('BackendProject', backendSchema)