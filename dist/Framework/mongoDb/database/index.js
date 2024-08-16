"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.User = void 0;
const userSchema_1 = require("./schema/userSchema");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return userSchema_1.User; } });
const taskSchema_1 = require("./schema/taskSchema");
Object.defineProperty(exports, "Task", { enumerable: true, get: function () { return taskSchema_1.Task; } });
