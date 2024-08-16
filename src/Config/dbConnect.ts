import mogoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongoUrl = process.env.Mongoose_Connection_Url as string

function connectDb(){
    mogoose.connect(mongoUrl)
    .then(()=>{
        console.log('Connected to MongoDB database')
    })
    .catch((err)=>{
        console.log('An error occurred whitle connectying with db',err)
    })
}

export default connectDb