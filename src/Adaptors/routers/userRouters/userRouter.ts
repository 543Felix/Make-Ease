 import express from 'express'
import userController from '../../controllers/userController'
import taskController from '../../controllers/taskController'

export default (dependencies:any)=>{
    
    const {loginUserController,registerUserController,updateUserController} = userController(dependencies)
    const userRouter = express.Router()

    userRouter.post('/login',loginUserController)
    userRouter.post('/register',registerUserController)
    userRouter.put('/updateUser',updateUserController)
    // userRouter.patch('/blockUser',updateUserController)
    // userRouter.patch('/unBlockUser',updateUserController)
    return userRouter

}