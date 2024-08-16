import { Task } from "../../database"
import { taskInterface } from "../../../../entities"


export default {
    db:async (userId:string)=>{
        try {
        const tasks:taskInterface[] = await Task.find({user:userId})
        return {status:true,data:tasks}
        } catch (error) {
            console.log('error = ',error)
        }
         
    }
}