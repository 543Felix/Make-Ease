import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,require:true},
    isBlocked:{type:Boolean,default:false}
})

const User  =   model('User',userSchema)
export  {User}