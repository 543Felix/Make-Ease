"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoUrl = process.env.Mongoose_Connection_Url;
function connectDb() {
    mongoose_1.default.connect(mongoUrl)
        .then(() => {
        console.log('Connected to MongoDB database');
    })
        .catch((err) => {
        console.log('An error occurred whitle connectying with db', err);
    });
}
exports.default = connectDb;
