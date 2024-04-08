"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteCommand = void 0;
const helper_1 = require("./helper");
const move_1 = require("./move");
const ExecuteCommand = (robot, input) => {
    if (input.startsWith("PLACE")) {
        const data = input.substring(6).split(",");
        if (data.length < 3) {
            console.log("Invalid PLACE command. Usage: PLACE X,Y,F", "\n");
            return robot;
        }
        const isValidX = (0, helper_1.IsValidNumber)(data[0]);
        const isValidY = (0, helper_1.IsValidNumber)(data[0]);
        const isValidDir = (0, helper_1.IsValidDirection)(data[2]);
        if (isValidX && isValidY && isValidDir) {
            const newX = Number(data[0]);
            const newY = Number(data[1]);
            const DIRECTION = data[2];
            if ((0, helper_1.IsValidPosition)(newX, newY)) {
                robot.X = newX;
                robot.Y = newY;
                robot.DIRECTION = DIRECTION;
                robot.PLACED = true;
            }
            else {
                console.log("Invalid position. Position must be within 5x5 table. Start in zero", "\n");
            }
        }
        else {
            console.log("Invalid PLACE command. Usage: PLACE X,Y,F", "\n");
        }
    }
    else if (robot.PLACED) {
        switch (input) {
            case "MOVE":
                var move = (0, move_1.Move)(robot);
                if (move.Valid) {
                    robot.X = move.Location.X;
                    robot.Y = move.Location.Y;
                }
                else {
                    console.log(move.Message, "\n");
                }
                break;
            case "LEFT":
                robot.DIRECTION = (0, helper_1.RotateToLeft)(robot.DIRECTION);
                break;
            case "RIGHT":
                robot.DIRECTION = (0, helper_1.RotateToRight)(robot.DIRECTION);
                break;
            case "REPORT":
                console.log(`${robot.X},${robot.Y},${robot.DIRECTION}`, "\n");
                break;
            default:
                console.log("Invalid command.", "\n");
                break;
        }
    }
    else {
        console.log("Robot has not been placed yet.", "\n");
    }
    return robot;
};
exports.ExecuteCommand = ExecuteCommand;
//# sourceMappingURL=command.js.map