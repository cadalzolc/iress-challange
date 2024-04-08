export const IsValidNumber = (input: string) =>
  !isNaN(parseFloat(input)) && isFinite(parseFloat(input));

export const IsValidDirection = (direction: string) =>
  ["NORTH", "WEST", "SOUTH", "EAST"].includes(direction);

export const IsValidPosition = (x: number, y: number) =>
  x >= 0 && x < 5 && y >= 0 && y < 5;

export const RotateToLeft = (direction: string) => {
  if (direction == "NORTH") return "WEST";
  if (direction == "WEST") return "SOUTH";
  if (direction == "SOUTH") return "EAST";
  return "NORTH";
};

export const RotateToRight = (direction: string) => {
  if (direction == "NORTH") return "EAST";
  if (direction == "EAST") return "SOUTH";
  if (direction == "SOUTH") return "WEST";
  return "NORTH";
};
