import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    user:{type:Schema.Types.ObjectId,reduire:true,ref:'User'},
    title:{type:String,require:true},
    isCompleted:{type:Boolean,default:false},
    priority:{
        type:String,
        enum:['low','medium','high'],
        required:true
    },
    dueDate:{type:Date,require:true}
})

const Task = model('Task',taskSchema)
export {Task}