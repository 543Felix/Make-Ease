"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTaskRepo = exports.deleteTaskRepo = exports.updateTaskRepo = exports.addTaskRepo = void 0;
const addTaskRepo_1 = __importDefault(require("./addTaskRepo"));
exports.addTaskRepo = addTaskRepo_1.default;
const updateTaskRepo_1 = __importDefault(require("./updateTaskRepo"));
exports.updateTaskRepo = updateTaskRepo_1.default;
const deleteTaskRepo_1 = __importDefault(require("./deleteTaskRepo"));
exports.deleteTaskRepo = deleteTaskRepo_1.default;
const getAllTaskRepo_1 = __importDefault(require("./getAllTaskRepo"));
exports.getAllTaskRepo = getAllTaskRepo_1.default;
