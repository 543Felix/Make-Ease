"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../../controllers/userController"));
const taskController_1 = __importDefault(require("../../controllers/taskController"));
exports.default = (dependencies) => {
    const { loginUserController, registerUserController, updateUserController } = (0, userController_1.default)(dependencies);
    const { getAllTaskController } = (0, taskController_1.default)(dependencies);
    const userRouter = express_1.default.Router();
    userRouter.post('/login', loginUserController);
    userRouter.post('/register', registerUserController);
    userRouter.put('/updateUser', updateUserController);
    userRouter.get('/allTasks/:id', getAllTaskController);
    // userRouter.patch('/blockUser',updateUserController)
    // userRouter.patch('/unBlockUser',updateUserController)
    return userRouter;
};
