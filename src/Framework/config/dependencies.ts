import {
  loginUserRepo,
  registerUserRepo,
  updateUserDataRepo,
  addTaskRepo,
  updateTaskRepo,
  getUsersRepo,
  deleteTaskRepo,
  getAllTaskRepo
} from "../mongoDb/repository";


import {
  userLogin,
  registerNewUser,
  updateUserData,
  addTask,
  updateTask,
  getUsers,
  deleteTask,
  getAllTask
} from "../../Application";




const useCase = {
  userLogin,
  registerNewUser,
  updateUserData,
  addTask,
  updateTask,
  getUsers,
  deleteTask,
  getAllTask
};

const repository = {
  loginUserRepo,
  registerUserRepo,
  updateUserDataRepo,
  addTaskRepo,
  updateTaskRepo,
  getUsersRepo,
  deleteTaskRepo,
  getAllTaskRepo,
};

export default {
  useCase,
  repository,
};
