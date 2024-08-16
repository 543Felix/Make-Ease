import { taskInterface } from "../../entities"



export const updateTask = (dependencies:any)=>{

    const executeFunction = async (data:taskInterface)=>{
      const {updateTaskRepo} = dependencies.repository
      return await updateTaskRepo.db(data)
       
    }
    return {executeFunction}
}