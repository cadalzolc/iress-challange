"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../lib/command");
describe("ExecuteCommand", () => {
    let robot;
    beforeEach(() => {
        robot = {
            X: 0,
            Y: 0,
            PLACED: false,
            DIRECTION: "",
        };
    });
    it('should display todos', () => {
        // Test logic here
    });
    test("Example A: PLACE 0,0,NORTH, MOVE, REPORT", () => {
        robot = (0, command_1.ExecuteCommand)(robot, "PLACE 0,0,NORTH");
        robot = (0, command_1.ExecuteCommand)(robot, "MOVE");
        const result = (0, command_1.ExecuteCommand)(robot, "REPORT");
        expect(result).toEqual({ X: 0, Y: 1, PLACED: true, DIRECTION: "NORTH" });
    });
    test("Example B: PLACE 0,0,NORTH, LEFT, REPORT", () => {
        robot = (0, command_1.ExecuteCommand)(robot, "PLACE 0,0,NORTH");
        robot = (0, command_1.ExecuteCommand)(robot, "LEFT");
        const result = (0, command_1.ExecuteCommand)(robot, "REPORT");
        expect(result).toEqual({ X: 0, Y: 0, PLACED: true, DIRECTION: "WEST" });
    });
    test("Example C: PLACE 1,2,EAST, MOVE, MOVE, LEFT, MOVE, REPORT", () => {
        robot = (0, command_1.ExecuteCommand)(robot, "PLACE 1,2,EAST");
        robot = (0, command_1.ExecuteCommand)(robot, "MOVE");
        robot = (0, command_1.ExecuteCommand)(robot, "MOVE");
        robot = (0, command_1.ExecuteCommand)(robot, "LEFT");
        robot = (0, command_1.ExecuteCommand)(robot, "MOVE");
        const result = (0, command_1.ExecuteCommand)(robot, "REPORT");
        expect(result).toEqual({ X: 3, Y: 3, PLACED: true, DIRECTION: "NORTH" });
    });
});
//# sourceMappingURL=robot.test.js.map