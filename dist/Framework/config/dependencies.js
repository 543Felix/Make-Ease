"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("../mongoDb/repository");
const Application_1 = require("../../Application");
const useCase = {
    userLogin: Application_1.userLogin,
    registerNewUser: Application_1.registerNewUser,
    updateUserData: Application_1.updateUserData,
    addTask: Application_1.addTask,
    updateTask: Application_1.updateTask,
    getUsers: Application_1.getUsers,
    deleteTask: Application_1.deleteTask,
    getAllTask: Application_1.getAllTask
};
const repository = {
    loginUserRepo: repository_1.loginUserRepo,
    registerUserRepo: repository_1.registerUserRepo,
    updateUserDataRepo: repository_1.updateUserDataRepo,
    addTaskRepo: repository_1.addTaskRepo,
    updateTaskRepo: repository_1.updateTaskRepo,
    getUsersRepo: repository_1.getUsersRepo,
    deleteTaskRepo: repository_1.deleteTaskRepo,
    getAllTaskRepo: repository_1.getAllTaskRepo,
};
exports.default = {
    useCase,
    repository,
};
