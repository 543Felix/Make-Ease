"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../../controllers/userController"));
exports.default = (dependencies) => {
    const { updateUserController, loginUserController, registerUserController, getUsersController } = (0, userController_1.default)(dependencies);
    const adminRouter = express_1.default.Router();
    adminRouter.post('/login', loginUserController);
    adminRouter.post('/register', registerUserController);
    adminRouter.patch('/blockUser', updateUserController);
    adminRouter.patch('/unBlockUser', updateUserController);
    adminRouter.get('/users', getUsersController);
    return adminRouter;
};
