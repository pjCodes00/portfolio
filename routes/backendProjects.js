const express= require('express')
const router= express.Router()
const getAllProjects= require('../controllers/backendProjects')

router.get('/', getAllProjects)

module.exports= router