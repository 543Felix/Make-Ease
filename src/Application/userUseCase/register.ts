



export const registerNewUser =(dependencies:any)=>{
  const {registerUserRepo} = dependencies.repository

  const executeFunction = async (data: any) => {
    let responsefromRegisterUser =  await registerUserRepo.db(data)
    return responsefromRegisterUser
   
  };
  return {executeFunction}
}