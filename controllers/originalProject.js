const express= require('express')
const OriginalProject= require('../models/OriginalProject')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, UnauthenticatedError}= require('../errors')

const getAllProjects= async(req, res) => {

  const projects= await OriginalProject.find({})

  res.status(StatusCodes.OK).json({projects, count: projects.length})
}

module.exports= getAllProjects
