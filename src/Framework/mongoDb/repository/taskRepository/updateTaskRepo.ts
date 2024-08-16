import { taskInterface } from "../../../../entities"
import { Task } from "../../database"

export default {
  db:async (data:taskInterface)=>{
    const task = await Task.findOne({_id:data._id})
    console.log('data = ',data)
    if(task){
        task.title=data.title?data.title:task.title
        task.priority = data.priority?data.priority:task.priority
        task.dueDate=data.dueDate?data.dueDate:task.dueDate,
        task.isCompleted=data.isCompleted?data.isCompleted:task.isCompleted
        await task.save()
        return {status:true,message:'successfully updated'}
    }else{
        return {status:false,message:'An error ocured while updating task'}
    }
  }
}