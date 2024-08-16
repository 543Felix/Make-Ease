import { User } from "../../database";
import { userInterface } from "../../../../entities";
import bcrypt from 'bcrypt'

export default{
    db: async (data:userInterface)=>{
         try {
            let existingUser =await User.findOne({email:data.email})
            if(existingUser){
                return{status:false,message:'User already exists with same credentials'}
            }else{
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(data.password,salt)
              const user =  new User({
                    name:data.name,
                    email:data.email,
                    password:hashedPassword,
                    role:data.role
                })
                await user.save()
                return {status:true,message:'User registered sucesssfully',data:user}
            }
         } catch (error) {
            
         }
    }
}