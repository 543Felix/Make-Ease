"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addTaskcontroller_1 = __importDefault(require("./addTaskcontroller"));
const updateTaskController_1 = __importDefault(require("./updateTaskController"));
const deleteTaskController_1 = __importDefault(require("./deleteTaskController"));
const getAllTaskController_1 = __importDefault(require("./getAllTaskController"));
exports.default = (dependencies) => {
    return {
        addTaskController: (0, addTaskcontroller_1.default)(dependencies),
        updateTaskController: (0, updateTaskController_1.default)(dependencies),
        deleteTaskController: (0, deleteTaskController_1.default)(dependencies),
        getAllTaskController: (0, getAllTaskController_1.default)(dependencies)
    };
};
