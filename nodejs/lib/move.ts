import { IsValidPosition } from "./helper";
import { IMoveResponse, IToyInfo } from "./robot";

export const Move = (robot: IToyInfo) => {
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

  var isValid = IsValidPosition(newX, newY);

  const res: IMoveResponse = {
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
