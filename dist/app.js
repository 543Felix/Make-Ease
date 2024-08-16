"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./Config/dbConnect"));
const dependencies_1 = __importDefault(require("./Framework/config/dependencies"));
const routers_1 = require("./Adaptors/routers");
const port = 3002;
const app = (0, express_1.default)();
(0, dbConnect_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', (0, routers_1.routes)(dependencies_1.default));
app.listen(port, () => {
    console.log(`server is running on : http://localhost:${port}`);
});
