const express= require('express')
require('dotenv').config()
const app= express()
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB= require('./db/connect')
const originalProjRouter= require('./routes/originalProject')
const backendProjRouter= require('./routes/backendProjects')
const frontendProjRouter= require('./routes/frontendProjects')
const fccProjRouter= require('./routes/fccProjects')
const path= require('path')
const port= process.env.PORT || 3500

app.use(express.static('./public'))


 app.get('/frontendProjects/:folder/:page', (req, res, next) => {
  const folder= req.params.folder
  const page= req.params.page
  const filePath= path.join(__dirname, 'public', 'frontendProjects', folder, `${page}.html`)
  res.sendFile(filePath, (err) => {
    if(err) next 
  })
 })

 
  
app.use(express.json())



app.use('/api/v1/original', originalProjRouter)
app.use('/api/v1/frontend', frontendProjRouter)
app.use('/api/v1/backend', backendProjRouter)
app.use('/api/v1/fcc', fccProjRouter)

 


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start= async() => {
  try{ 
    await connectDB(process.env.MONGO_URI)
    console.log('connected to mongodb')
    app.listen(port, console.log(`Server is listening on port ${port}`))
  } catch(error) {
    console.log(error)
  }
}

start()