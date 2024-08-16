
export  const updateUserData =  (dependencies:any)=>{
    const {updateUserDataRepo} = dependencies.repository

    const executeFunction = async (data:any)=>{
        const updateStatus = await updateUserDataRepo.db(data)
        return updateStatus
    }

    return {executeFunction}
}

