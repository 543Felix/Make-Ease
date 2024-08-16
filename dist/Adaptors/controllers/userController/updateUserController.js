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
    const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { _id } = req.query;
            console.log('id on updateUserController = ', _id);
            const { name, email, password, isBlocked } = req.body;
            const data = {
                name, email, password, _id, isBlocked
            };
            const { updateUserData } = dependencies.useCase;
            const response = yield updateUserData(dependencies).executeFunction(data);
            if (response.status === true) {
                res.status(200).json(response.message);
            }
            else {
                res.status(500).json(response.message);
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
    return updateUserController;
};
