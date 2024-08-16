"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = __importDefault(require("../../controllers/taskController"));
exports.default = (dependecies) => {
    const { addTaskController, updateTaskController, deleteTaskController } = (0, taskController_1.default)(dependecies);
    const taskRouter = express_1.default.Router();
    taskRouter.post('/addTask', addTaskController);
    taskRouter.put('/updateTask', updateTaskController);
    taskRouter.patch('/taskComplete', updateTaskController);
    taskRouter.delete('/deleteTask/:id', deleteTaskController);
    return taskRouter;
};
