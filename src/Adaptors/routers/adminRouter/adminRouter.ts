import express from 'express'
import userController from "../../controllers/userController"


export default (dependencies:any)=>{
     const {updateUserController,loginUserController,registerUserController,getUsersController} = userController(dependencies)
   
     const adminRouter = express.Router()
     
     adminRouter.post('/login',loginUserController)
     adminRouter.post('/register',registerUserController)
     adminRouter.patch('/blockUser',updateUserController)
     adminRouter.patch('/unBlockUser',updateUserController)
     adminRouter.get('/users',getUsersController)
     return adminRouter
}