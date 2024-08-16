import { Request,Response } from "express"

export default (dependencies:any)=>{


 const updateUserController = async (req:Request,res:Response)=>{
    try {
        const {_id} = req.query
       console.log('id on updateUserController = ',_id)
       const {name,email,password,isBlocked} = req.body
       console.log('req.body = ',req.body)
       if(Object.keys(req.body).length===0){
        return res.status(400 ).json({message:'No data in the body to update user'})
       }
       const data={
        name,email,password,_id,isBlocked
       }
       const {updateUserData} = dependencies.useCase
       const response = await updateUserData(dependencies).executeFunction(data)
       if(response.status===true){
       return res.status(200).json(response.message)
       }else{
          return res.status(500).json(response.message)
       }  
    } catch (error) {
        res.status(500).json(error)
    }
      
       

 }
 return updateUserController
}