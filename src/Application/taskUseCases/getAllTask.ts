

export const getAllTask = (dependencies:any)=>{
    const executeFunction = async (userId:string)=>{
        const {getAllTaskRepo} = dependencies.repository
        const response = await getAllTaskRepo.db(userId)
        return  response
 
    }

    return {executeFunction}
}
 