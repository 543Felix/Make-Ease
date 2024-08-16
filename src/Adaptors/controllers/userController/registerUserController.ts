import { Request,Response } from "express"

export default (dependencies:any)=>{
    
    const registerUserController = async(req:Request,res:Response)=>{
        try {
            const {registerNewUser} = dependencies.useCase
        const {name,email,role,password}  = req.body
        let responseOfRegister = await registerNewUser(dependencies).executeFunction({name,email,role,password})
        if(responseOfRegister&&responseOfRegister.status===true){
            res.status(200).json(responseOfRegister.message)
        }else{
            res.status(500).json(responseOfRegister.message)
        }
        } catch (error) {
            res.status(500).json(error)
        }
        
        
    }
    return registerUserController
}