"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginUserController_1 = __importDefault(require("./loginUserController"));
const registerUserController_1 = __importDefault(require("./registerUserController"));
const updateUserController_1 = __importDefault(require("./updateUserController"));
const getUsersController_1 = __importDefault(require("./getUsersController"));
exports.default = (dependencies) => {
    return {
        loginUserController: (0, loginUserController_1.default)(dependencies),
        registerUserController: (0, registerUserController_1.default)(dependencies),
        updateUserController: (0, updateUserController_1.default)(dependencies),
        getUsersController: (0, getUsersController_1.default)(dependencies)
    };
};
