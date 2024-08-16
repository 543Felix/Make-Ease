import { taskInterface } from "../../entities";

export const addTask = (dependencies:any)=>{
    const {addTaskRepo} = dependencies.repository
    
    const executeFunction = async(data:taskInterface)=>{
       const addTask = await addTaskRepo.db(data)
       return addTask
    } 

    return {executeFunction}
}