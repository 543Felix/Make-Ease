"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: String, require: true },
    isBlocked: { type: Boolean, default: false }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
