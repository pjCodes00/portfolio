const express= require('express')
const router= express.Router()
const getAllProjects= require('../controllers/originalProject')

router.get('/', getAllProjects)

module.exports= router