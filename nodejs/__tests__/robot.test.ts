import { ExecuteCommand } from "../lib/command";
import { IToyInfo } from "../lib/robot";

describe("ExecuteCommand", () => {
  let robot: IToyInfo;

  beforeEach(() => {
    robot = {
      X: 0,
      Y: 0,
      PLACED: false,
      DIRECTION: "",
    };
  });

  test("Example A: PLACE 0,0,NORTH, MOVE, REPORT", () => {
    robot = ExecuteCommand(robot, "PLACE 0,0,NORTH");
    robot = ExecuteCommand(robot, "MOVE");
    const result = ExecuteCommand(robot, "REPORT");
    expect(result).toEqual({ X: 0, Y: 1, PLACED: true, DIRECTION: "NORTH" });
  });

  test("Example B: PLACE 0,0,NORTH, LEFT, REPORT", () => {
    robot = ExecuteCommand(robot, "PLACE 0,0,NORTH");
    robot = ExecuteCommand(robot, "LEFT");
    const result = ExecuteCommand(robot, "REPORT");
    expect(result).toEqual({ X: 0, Y: 0, PLACED: true, DIRECTION: "WEST" });
  });

  test("Example C: PLACE 1,2,EAST, MOVE, MOVE, LEFT, MOVE, REPORT", () => {
    robot = ExecuteCommand(robot, "PLACE 1,2,EAST");
    robot = ExecuteCommand(robot, "MOVE");
    robot = ExecuteCommand(robot, "MOVE");
    robot = ExecuteCommand(robot, "LEFT");
    robot = ExecuteCommand(robot, "MOVE");
    const result = ExecuteCommand(robot, "REPORT");
    expect(result).toEqual({ X: 3, Y: 3, PLACED: true, DIRECTION: "NORTH" });
  });

 
});
