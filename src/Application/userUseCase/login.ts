


import dotenv from "dotenv";
dotenv.config();


export const userLogin = (dependencies: any) => {
  const { loginUserRepo } = dependencies.repository;

  const executeFunction = async (data: any) => {
    const responseofLogin =await loginUserRepo.db(data)
    return responseofLogin
  };

  return  {executeFunction};
};