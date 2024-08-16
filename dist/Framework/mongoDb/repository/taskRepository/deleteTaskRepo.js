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
    db: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield database_1.Task.deleteOne({ _id: id });
            if (data) {
                return { status: true, message: 'task successfully deleted' };
            }
            else {
                return { status: false, message: 'deletion of task failed' };
            }
        }
        catch (error) {
            return { status: false, message: error === null || error === void 0 ? void 0 : error.message };
        }
    })
};
