"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const command_1 = require("./lib/command");
console.log("---------------");
console.log("Welcome to My Robot Simulation", "\n");
console.log("F: NORTH, EAST, SOUTH, WEST", "\n");
console.log("Command Usage");
console.log("PLACE X,Y,F");
console.log("Enter x to quit program", "\n");
let Robot = {
    X: 0,
    Y: 0,
    PLACED: false,
    DIRECTION: "",
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const AskUserInput = () => {
    rl.question("Enter command: ", (input) => {
        if (input.toLowerCase() === "x") {
            rl.close();
            return;
        }
        if (input && input.length > 0) {
            const cmd = input.trim().toUpperCase();
            Robot = (0, command_1.ExecuteCommand)(Robot, cmd);
        }
        else {
            console.log("Invalid Command", "\n");
        }
        AskUserInput();
    });
};
AskUserInput();
//# sourceMappingURL=app.js.map