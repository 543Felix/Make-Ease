import { Request,Response } from "express"

export default (dependencies:any)=>{
    const updateTaskController = async (req:Request,res:Response)=>{
        const {updateTask} = dependencies.useCase

        const _id = req.query.id
        const {title,priority,isCompleted,dueDate} =  req.body
        const data={
            title,priority,isCompleted,dueDate,_id
        }
        console.log('data = ',data)
       const response =  await updateTask(dependencies).executeFunction(data)
       if(response.status===true){
        res.status(200).json({message:response.message})
       }else{
        res.status(500).json({message:response.message})
       }
    }

    return updateTaskController
}