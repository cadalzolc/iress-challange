"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const helper_1 = require("./helper");
const Move = (robot) => {
    let newX = robot.X;
    let newY = robot.Y;
    switch (robot.DIRECTION) {
        case "NORTH":
            newY++;
            break;
        case "SOUTH":
            newY++;
            break;
        case "EAST":
            newX++;
            break;
        case "WEST":
            newX++;
            break;
    }
    var isValid = (0, helper_1.IsValidPosition)(newX, newY);
    const res = {
        Location: {
            X: newX,
            Y: newY,
        },
        Valid: isValid,
        Message: isValid
            ? "Valid Location"
            : "Can't proceed with your command, Position must be within 5x5 table",
    };
    return res;
};
exports.Move = Move;
//# sourceMappingURL=move.js.map