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
exports.default = (dependencies) => {
    const deleteTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        console.log('id on deleteTaskController = ', id);
        try {
            const { deleteTask } = dependencies.useCase;
            const response = yield deleteTask(dependencies).executeFunction(id);
            if (response.status === true) {
                res.status(200).json({ message: response.message });
            }
            else {
                res.status(500).json({ message: response.message });
            }
        }
        catch (error) {
        }
    });
    return deleteTaskController;
};
