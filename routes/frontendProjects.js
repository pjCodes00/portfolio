const express= require('express')
const getAllProjects= require('../controllers/frontendProjects')
const router= express.Router()

router.get('/', getAllProjects)

module.exports= router