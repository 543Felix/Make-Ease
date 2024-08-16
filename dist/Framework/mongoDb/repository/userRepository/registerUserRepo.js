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
            let existingUser = yield database_1.User.findOne({ email: data.email });
            if (existingUser) {
                return { status: false, message: 'User already exists with same credentials' };
            }
            else {
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashedPassword = yield bcrypt_1.default.hash(data.password, salt);
                const user = new database_1.User({
                    name: data.name,
                    email: data.email,
                    password: hashedPassword,
                    role: data.role
                });
                yield user.save();
                return { status: true, message: 'User registered sucesssfully', data: user };
            }
        }
        catch (error) {
        }
    })
};
