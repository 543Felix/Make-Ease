import { Request, Response } from "express"

export default (dependencies:any)=>{
   const getUsersController = async(req:Request,res:Response)=>{
    try {
        const {getUsers}  = dependencies.useCase
        const response = await getUsers(dependencies).executeFunction()
        if(response.data){
            res.status(200).json({data:response.data})
        }else{
           res.status(200).json({message:response.message})
        } 
    } catch (error) {
        res.status(500).json(error)
    }
     
   } 
   return getUsersController
}