import { Request, Response } from "express";

export default (dependecies: any) => {
  const loginUserController = async (req: Request, res: Response) => {
    console.log('enter user loginController')
    try {
      const { userLogin } = dependecies.useCase;

      const { email, password } = req.body;
  
      const data = {
        email,
        password,
      };
  
      const response = await userLogin(dependecies).executeFunction(data);
      if(response.status===true){
       return res.status(200).json(response.message)
      }else{
        return res.status(500).json(response.message)
      }
    } catch (error) {
      res.status(500).json(error)
    }
   
  };

  return loginUserController;
};