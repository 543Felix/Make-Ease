import { User } from "../../database";
import { userInterface } from "../../../../entities";


export default{
    db: async(data:userInterface)=>{
        console.log('update user data = ',data)
       let existingUser  = await User.findOne({_id:data._id})
        if(existingUser ){
            existingUser.name = data.name?data.name:existingUser.name
            existingUser.email = data.email?data.email:existingUser.email
            existingUser.role = data.role?data.role:existingUser.role
            existingUser.isBlocked = data.isBlocked?data.isBlocked:existingUser.isBlocked
            await existingUser.save()

            return{status:true,message:'successfully updated user Data'}
        }else{
            return{status:false,message:'Invalkid user credentials'}
           
        }
       
    }
}