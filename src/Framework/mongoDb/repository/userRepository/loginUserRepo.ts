import { User } from "../../database";
import { userInterface } from "../../../../entities";
import bcrypt from 'bcrypt'


export default{
    db : async (data:userInterface)=>{
        try {
            const userExists = await User.findOne({email:data.email})
            if(userExists){
                const passwordMatch = await bcrypt.compare(userExists.password as string,data.password as string)
                if(passwordMatch){
                    return{status:true,message:'Successfully loggedIn'}
                }else{
                    return{status:false,message:'Invalid credentials'}
                }
            }else{
                return{status:false,message:'Invalid credentials'}
            }
        } catch (error) {
            return {status:false,erro:'Error occured while updating database'}
        }
       
    }
   
}