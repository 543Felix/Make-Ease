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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = {
    db: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userExists = yield database_1.User.findOne({ email: data.email });
            if (userExists) {
                const passwordMatch = yield bcrypt_1.default.compare(userExists.password, data.password);
                if (passwordMatch) {
                    return { status: true, message: 'Successfully loggedIn' };
                }
                else {
                    return { status: false, message: 'Invalid credentials' };
                }
            }
            else {
                return { status: false, message: 'Invalid credentials' };
            }
        }
        catch (error) {
            return { status: false, erro: 'Error occured while updating database' };
        }
    })
};
