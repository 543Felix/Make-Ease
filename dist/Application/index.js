"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTask = exports.deleteTask = exports.getUsers = exports.updateTask = exports.addTask = exports.updateUserData = exports.registerNewUser = exports.userLogin = void 0;
const userUseCase_1 = require("./userUseCase");
Object.defineProperty(exports, "userLogin", { enumerable: true, get: function () { return userUseCase_1.userLogin; } });
Object.defineProperty(exports, "updateUserData", { enumerable: true, get: function () { return userUseCase_1.updateUserData; } });
Object.defineProperty(exports, "registerNewUser", { enumerable: true, get: function () { return userUseCase_1.registerNewUser; } });
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return userUseCase_1.getUsers; } });
const taskUseCases_1 = require("./taskUseCases");
Object.defineProperty(exports, "addTask", { enumerable: true, get: function () { return taskUseCases_1.addTask; } });
Object.defineProperty(exports, "updateTask", { enumerable: true, get: function () { return taskUseCases_1.updateTask; } });
Object.defineProperty(exports, "deleteTask", { enumerable: true, get: function () { return taskUseCases_1.deleteTask; } });
Object.defineProperty(exports, "getAllTask", { enumerable: true, get: function () { return taskUseCases_1.getAllTask; } });