import express from "express";
import userRouter from'./userRouters/userRouter'
import taskRouter from "./taskRouters/taskRouter";
import adminRouter from "./adminRouter/adminRouter";

export const routes = (dependencies: any) => {
  const router = express.Router();

  router.use("/user", userRouter(dependencies));
  router.use("/task",taskRouter(dependencies))
  router.use('/admin',adminRouter(dependencies))

  return router;
};