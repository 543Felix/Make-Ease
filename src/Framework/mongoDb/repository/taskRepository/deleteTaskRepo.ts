import { Task } from "../../database"

export default {
   db:async(id:string)=>{
    try {
        const data = await Task.deleteOne({_id:id})
  if(data){
    return {status:true,message:'task successfully deleted'}
  }else{
    return {status:false,message:'deletion of task failed'}
  } 
    } catch (error:any) {
         return {status:false,message:error?.message}
    }
 
   }
}