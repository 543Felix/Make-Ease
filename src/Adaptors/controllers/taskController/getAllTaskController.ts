import { Request, Response } from "express"


export default (dependecies:any)=>{

    const  getAllTaskController = async(req:Request,res:Response)=>{
       try {
         const {getAllTask} = dependecies.useCase
         const {id} = req.params
         console.log('user Id in getAlltask controller = ',id)
         const response = await getAllTask(dependecies).executeFunction(id)
         if(response.data){
            res.status(200).json(response.data)
         }
       } catch (error) {
         res.status(500).json({error})
       }
    }

    return getAllTaskController

}