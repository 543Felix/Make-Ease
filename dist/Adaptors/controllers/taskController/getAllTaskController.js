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
    const getAllTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { getAllTask } = dependecies.useCase;
            const { id } = req.params;
            console.log('user Id in getAlltask controller = ', id);
            const response = yield getAllTask(dependecies).executeFunction(id);
            if (response.data) {
                res.status(200).json(response.data);
            }
        }
        catch (error) {
            res.status(500).json({ error });
        }
    });
    return getAllTaskController;
};
