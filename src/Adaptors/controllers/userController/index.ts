import loginUserController from "./loginUserController";
import registerUserController from "./registerUserController";
import updateUserController from "./updateUserController";
import getUsersController from "./getUsersController";

export default (dependencies:any)=> {
    return{
        loginUserController:loginUserController(dependencies),
        registerUserController:registerUserController(dependencies),
        updateUserController:updateUserController(dependencies),
        getUsersController:getUsersController(dependencies)
    }
    
}