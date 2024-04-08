import {
  IsValidDirection,
  IsValidNumber,
  IsValidPosition,
  RotateToLeft,
  RotateToRight,
} from "./helper";
import { Move } from "./move";
import { IToyInfo } from "./robot";

export const ExecuteCommand = (robot: IToyInfo, input: string) => {
  if (input.startsWith("PLACE")) {
    const data = input.substring(6).split(",");

    if (data.length < 3) {
      console.log("Invalid PLACE command. Usage: PLACE X,Y,F", "\n");
      return robot;
    }

    const isValidX = IsValidNumber(data[0]);
    const isValidY = IsValidNumber(data[0]);
    const isValidDir = IsValidDirection(data[2]);

    if (isValidX && isValidY && isValidDir) {
      const newX = Number(data[0]);
      const newY = Number(data[1]);
      const DIRECTION = data[2];

      if (IsValidPosition(newX, newY)) {
        robot.X = newX;
        robot.Y = newY;
        robot.DIRECTION = DIRECTION;
        robot.PLACED = true;
      } else {
        console.log(
          "Invalid position. Position must be within 5x5 table. Start in zero",
          "\n"
        );
      }
    } else {
      console.log("Invalid PLACE command. Usage: PLACE X,Y,F", "\n");
    }
  } else if (robot.PLACED) {
    switch (input) {
      case "MOVE":
        var move = Move(robot);
        if (move.Valid) {
          robot.X = move.Location.X;
          robot.Y = move.Location.Y;
        } else {
          console.log(move.Message, "\n");
        }
        break;
      case "LEFT":
        robot.DIRECTION = RotateToLeft(robot.DIRECTION);
        break;
      case "RIGHT":
        robot.DIRECTION = RotateToRight(robot.DIRECTION);
        break;
      case "REPORT":
        console.log(`${robot.X},${robot.Y},${robot.DIRECTION}`, "\n");
        break;
      default:
        console.log("Invalid command.", "\n");
        break;
    }
  } else {
    console.log("Robot has not been placed yet.", "\n");
  }
  return robot;
};
