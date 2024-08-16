import addTaskController from "./addTaskcontroller";
import updateTaskController from "./updateTaskController";
import deleteTaskController from "./deleteTaskController";
import getAllTaskController from "./getAllTaskController";

export default (dependencies:any)=>{

    return{
        addTaskController:addTaskController(dependencies),
        updateTaskController:updateTaskController(dependencies),
        deleteTaskController:deleteTaskController(dependencies),
        getAllTaskController:getAllTaskController(dependencies)
    }
}