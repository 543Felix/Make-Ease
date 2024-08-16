

export const deleteTask = (dependencies:any)=>{
    const executeFunction = async(id:string)=>{
     const {deleteTaskRepo} = dependencies.repository
     const response = await  deleteTaskRepo.db(id)
     return response
    }
    return {executeFunction}
}