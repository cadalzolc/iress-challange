"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateToRight = exports.RotateToLeft = exports.IsValidPosition = exports.IsValidDirection = exports.IsValidNumber = void 0;
const IsValidNumber = (input) => !isNaN(parseFloat(input)) && isFinite(parseFloat(input));
exports.IsValidNumber = IsValidNumber;
const IsValidDirection = (direction) => ["NORTH", "WEST", "SOUTH", "EAST"].includes(direction);
exports.IsValidDirection = IsValidDirection;
const IsValidPosition = (x, y) => x >= 0 && x < 5 && y >= 0 && y < 5;
exports.IsValidPosition = IsValidPosition;
const RotateToLeft = (direction) => {
    if (direction == "NORTH")
        return "WEST";
    if (direction == "WEST")
        return "SOUTH";
    if (direction == "SOUTH")
        return "EAST";
    return "NORTH";
};
exports.RotateToLeft = RotateToLeft;
const RotateToRight = (direction) => {
    if (direction == "NORTH")
        return "EAST";
    if (direction == "EAST")
        return "SOUTH";
    if (direction == "SOUTH")
        return "WEST";
    return "NORTH";
};
exports.RotateToRight = RotateToRight;
//# sourceMappingURL=helper.js.map