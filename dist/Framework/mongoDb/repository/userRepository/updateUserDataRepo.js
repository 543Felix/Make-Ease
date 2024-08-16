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
const database_1 = require("../../database");
exports.default = {
    db: (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('update user data = ', data);
        let existingUser = yield database_1.User.findOne({ _id: data._id });
        if (existingUser) {
            existingUser.name = data.name ? data.name : existingUser.name;
            existingUser.email = data.email ? data.email : existingUser.email;
            existingUser.role = data.role ? data.role : existingUser.role;
            yield existingUser.save();
            return { status: true, message: 'successfully updated user Data' };
        }
        else {
            return { status: false, message: 'Invalkid user credentials' };
        }
    })
};
