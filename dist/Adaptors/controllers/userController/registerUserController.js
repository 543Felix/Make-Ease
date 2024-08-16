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
    const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { registerNewUser } = dependencies.useCase;
            const { name, email, role, password } = req.body;
            let responseOfRegister = yield registerNewUser(dependencies).executeFunction({ name, email, role, password });
            if (responseOfRegister && responseOfRegister.status === true) {
                res.status(200).json(responseOfRegister.message);
            }
            else {
                res.status(500).json(responseOfRegister.message);
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
    return registerUserController;
};
