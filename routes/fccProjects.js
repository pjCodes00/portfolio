const express= require('express')
const router= express.Router()
const getAllProjects= require('../controllers/fccProjects')

router.get('/', getAllProjects)

module.exports= router