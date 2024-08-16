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
        const task = yield database_1.Task.findOne({ _id: data._id });
        if (task) {
            task.title = data._id ? data._id : task.title;
            task.priority = data.priority ? data.priority : task.priority;
            task.dueDate = data.dueDate ? data.dueDate : task.dueDate;
            yield task.save();
        }
        else {
        }
    })
};
