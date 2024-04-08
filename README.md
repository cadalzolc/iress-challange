# Toy Robot Code Challenge

### About the project

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no
other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed.

### Direction

F = NORTH, EAST, SOUTH, WEST

### Command

- PLACE X,Y,F
- MOVE
- LEFT
- RIGHT
- REPORT

### Usage or Command Input

PLACE 0,0,NORTH

### Output

```yaml
Example: A
PLACE 0,0,NORTH
MOVE
REPORT

Output: 0,1,NORTH

Example: B
PLACE 0,0,NORTH
LEFT
REPORT

Output: 0,0,WEST

Example: C
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

Output: 3,3,NORTH
```

# NodeJS Project Instructions

The node.js version is build on typescript

Packages:
- @types/node
- jest
- ts-jest

### Tools and Requirements

- VS Code or Any Code Editor
- nodejs runtime

### How to start project in VS Code

- Open project folder in vscode
- Open terminal the follow the [Command To Run steps]

### How to start project in Terminal

- Open node.js root folder in the terminal
- Open terminal [Command To Run steps]

### Command To Run

Step 1:
Install NPM Packhes ((node_modules))

```node
   npm install
```

Step 2:
Run the project and testing the project

```
//Please see packge.json file for reference

// Create a latest build
npm run build

// To start the project
npm run start

// To test  the project using jest
npm run test
```

# DotNet Project Instructions

### Tools and Requirements

- Visual Studio 2019 or Higher
- .Net 7.0

### VS Code

- .Net 7.0 Runtime (To install dotnet cli)
- C# Devkit Extension

### Project Cloning or Download

- https://github.com/cadalzolc/iress-challange

### How to run the project in Visual Studio

- Open solution project
- Click Run or Play Button

### How to run the project in VS Code

- Open Folder in VSCode
- In the terminal, enter command, dotnet run --project [location of start-up with csproj extension]
- Ex. dotnet run --project project/iress-challange.csproj

### How to run project in the terminal or cmd or powershell

- Goto project location or root folder of the project
- enter command, dotnet run --project [location of start-up with csproj extension]
- Ex. dotnet run --project project/iress-challange.csproj

### How to run the NUnit test in Visual Studio

- Open solution project
- View Test Explorer
- Select Test and Click play in View Test Explorer
