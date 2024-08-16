import { User } from "../../database"
import { userInterface } from "../../../../entities"

export default {
    db:async()=>{
     const users:userInterface[] = await User.find({role:'user'})
    if(users){
        return {status:true,data:users}
    }else{
        return{status:true,message:'No users joined'}
    }
    } 
}