import express from 'express'
import connectDb from './Config/dbConnect'
import dependencies from './Framework/config/dependencies'
import { routes } from './Adaptors/routers'

const port = 3002

const app = express()

connectDb()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


   
 app.use('/api',routes(dependencies))

app.listen(port,()=>{
    console.log(`server is running on : http://localhost:${port}`)
})
