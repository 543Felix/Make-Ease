import { Request,Response } from "express"


export default (dependecies:any)=>{


 const addTaskController = async(req:Request,res:Response)=>{
    console.log('entered to add Task controller')
    const {addTask} = dependecies.useCase
    const {user,title,priority,dueDate} = req.body
  const data={
    user,title,priority,dueDate
  }
  const response = await addTask(dependecies).executeFunction(data)
  if(response.status===true){
    res.status(200).json({message:'task successfully added'})
  }else{
    res.status(500).json({message:'An unexpected error occured while adding task'})
  }
 }
 
  return addTaskController
 
}