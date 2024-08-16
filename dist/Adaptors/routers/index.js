"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouters/userRouter"));
const taskRouter_1 = __importDefault(require("./taskRouters/taskRouter"));
const adminRouter_1 = __importDefault(require("./adminRouter/adminRouter"));
const routes = (dependencies) => {
    const router = express_1.default.Router();
    router.use("/user", (0, userRouter_1.default)(dependencies));
    router.use("/task", (0, taskRouter_1.default)(dependencies));
    router.use('/admin', (0, adminRouter_1.default)(dependencies));
    return router;
};
exports.routes = routes;
