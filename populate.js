require('dotenv').config()
const connectDB= require('./db/connect')
const OriginalProject= require('./models/OriginalProject')
const BackendProject= require('./models/BackendProject')
const FrontendProject= require('./models/FrontendProject')
const originalProject= require('./originalProject.json')
const backendProjects= require('./backendProjects.json')
const frontendProjects= require('./frontendProjects.json')

const start= async() => {

  try{
  await connectDB(process.env.MONGO_URI)
  console.log('connected to monogdb')

  await Promise.all([
     OriginalProject.deleteMany(),
     BackendProject.deleteMany(),
     FrontendProject.deleteMany()
  ])


  await Promise.all([
     OriginalProject.create(originalProject),
     BackendProject.create(backendProjects),
     FrontendProject.create(frontendProjects)
  ])
 
  console.log('successfully created all projects')

  process.exit(0)
  }catch(error) {
    console.log(error)
    process.exit(1)
  }
}

start()
