import { Request, Response } from "express";

export default (dependencies:any)=>{
   const deleteTaskController = async(req:Request,res:Response)=>{
    const {id} = req.params
    console.log('id on deleteTaskController = ',id)
    try {
        const {deleteTask} = dependencies.useCase
        const response = await deleteTask(dependencies).executeFunction(id)
        if(response.status===true){
            res.status(200).json({message:response.message})
        }else{
            res.status(500).json({message:response.message})        }
    } catch (error) {
        
    }
   }  
   return deleteTaskController
}