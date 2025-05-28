const express= require('express')
const FrontendProject= require('../models/FrontendProject')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, UnauthenticatedError}= require('../errors')

const getAllProjects= async(req, res) => {
  //res.send('get all frontend projects')

  const projects= await FrontendProject.find({})

  res.status(StatusCodes.OK).json({projects, count: projects.length})
}

module.exports= getAllProjects
