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
        const task = yield database_1.Task.findOne({ user: data.user, title: data.title });
        if (task) {
            return { status: false, message: 'task already exists' };
        }
        else {
            const task = new database_1.Task({
                user: data.user,
                title: data.title,
                priority: data.priority,
                dueDate: data.dueDate
            });
            yield task.save();
            return { status: true, message: 'Task added successfully added' };
        }
    })
};
