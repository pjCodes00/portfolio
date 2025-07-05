const express= require('express')
const FccProject= require('../models/FccProject')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, UnauthenticatedError}= require('../errors')

const getAllProjects= async(req, res) => {
  
   const projects= await FccProject.find({})

   res.status(StatusCodes.OK).json({projects, count: projects.length})
}

module.exports= getAllProjects
