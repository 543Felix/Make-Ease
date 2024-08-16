"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, reduire: true, ref: 'User' },
    title: { type: String, require: true },
    isCompleted: { type: Boolean, default: false },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true
    },
    dueDate: { type: Date, require: true }
});
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.Task = Task;
