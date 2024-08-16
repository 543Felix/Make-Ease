import { Task } from "../../database"
import { taskInterface } from "../../../../entities"

export default {
    db:async(data:taskInterface)=>{
    const task = await Task.findOne({user:data.user,title:data.title})
    if(task){
       return {status:false,message:'task already exists'}
    }else{
        const task = new Task(
            {
                user:data.user,
                title:data.title,
                priority:data.priority,
                dueDate:data.dueDate
            }
        )
        await task.save()
        return {status:true,message:'Task added successfully added'}
    }

    }
}