

export const getUsers = (dependencies:any)=>{

    const executeFunction = async()=>{
        const {getUsersRepo} = dependencies.repository
        const response = await getUsersRepo.db()
        return response
    }
    return {executeFunction}
}