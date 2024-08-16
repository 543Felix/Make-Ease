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
    const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('enter user loginController');
        try {
            const { userLogin } = dependecies.useCase;
            const { email, password } = req.body;
            const data = {
                email,
                password,
            };
            const response = yield userLogin(dependecies).executeFunction(data);
            if (response.status === true) {
                return res.status(200).json(response.message);
            }
            else {
                return res.status(500).json(response.message);
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
    return loginUserController;
};