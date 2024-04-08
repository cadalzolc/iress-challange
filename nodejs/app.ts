import * as readline from "readline";
import { IToyInfo } from "./lib/robot";
import { ExecuteCommand } from "./lib/command";

console.log("---------------");
console.log("Welcome to My Robot Simulation", "\n");
console.log("F: NORTH, EAST, SOUTH, WEST", "\n");
console.log("Command Usage");
console.log("PLACE X,Y,F");
console.log("Enter x to quit program", "\n");

let Robot: IToyInfo = {
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
      Robot = ExecuteCommand(Robot, cmd);
    } else {
      console.log("Invalid Command", "\n");
    }

    AskUserInput();
  });
};

AskUserInput();
