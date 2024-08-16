import express from 'express'
import taskController from "../../controllers/taskController"


export default (dependecies:any)=>{
   const {addTaskController,updateTaskController,deleteTaskController,getAllTaskController} = taskController(dependecies)


   const taskRouter = express.Router()

   taskRouter.post('/addTask',addTaskController)
   taskRouter.put('/updateTask',updateTaskController)
   taskRouter.patch('/taskComplete',updateTaskController)
   taskRouter.delete('/deleteTask/:id',deleteTaskController)
   taskRouter.get('/allTasks/:id',getAllTaskController)


   return taskRouter
}