const express= require('express')
const BackendProject= require('../models/BackendProject')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, UnauthenticatedError}= require('../errors')

const getAllProjects= async(req, res) => {
  //  res.send('get all backend projects')
   const projects= await BackendProject.find({})

   res.status(StatusCodes.OK).json({projects, count: projects.length})
}

module.exports= getAllProjects
