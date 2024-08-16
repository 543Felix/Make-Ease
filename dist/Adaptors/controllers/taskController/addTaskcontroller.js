"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (dependecies) => {
    const addTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('entered to add Task controller');
        const { addTask } = dependecies.useCase;
        const { user, title, priority, dueDate } = req.body;
        const data = {
            user, title, priority, dueDate
        };
        const response = yield addTask(dependecies).executeFunction(data);
        if (response.status === true) {
            res.status(200).json({ message: 'task successfully added' });
        }
        else {
            res.status(500).json({ message: 'An unexpected error occured while adding task' });
        }
    });
    return addTaskController;
};
