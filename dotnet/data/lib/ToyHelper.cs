namespace Cadalzo;

public class ToyHelper
{

    public static bool IsValidDirection(string direction)
    {
        var Directions = new List<string>
       {
         "NORTH",
         "WEST",
         "SOUTH",
         "EAST"
      };

        return Directions.Contains(direction.ToUpper());
    }

    public static bool IsValidPosition(int x, int y)
    {
        return x >= 0 && x < 5 && y >= 0 && y < 5;
    }

    public static MoveResponse Move(ToyInfo robot)
    {
        int newX = robot.X, newY = robot.Y;

        switch (robot.DIRECTION)
        {
            case "NORTH":
                newY++;
                break;
            case "SOUTH":
                newY--;
                break;
            case "EAST":
                newX++;
                break;
            case "WEST":
                newX--;
                break;
        }

        var isValid = IsValidPosition(newX, newY);

        return new MoveResponse
        {
            Valid = isValid,
            Message = isValid ? "Valid Location" : "Can't proceed with your command, Position must be within 5x5 table",
            Location = new ToyLocation
            {
                X = newX,
                Y = newY
            }
        };
    }

    public static string RotateToLeft(string direction)
    {
        if (direction == "NORTH") return "WEST";
        if (direction == "WEST") return "SOUTH";
        if (direction == "SOUTH") return "EAST";
        return "NORTH";
    }

    public static string RotateToRight(string direction)
    {
        if (direction == "NORTH") return "EAST";
        if (direction == "EAST") return "SOUTH";
        if (direction == "SOUTH") return "WEST";
        return "NORTH";
    }

    public static ToyInfo ExecuteCommand(ToyInfo robot, string input)
    {
        if (input.StartsWith("PLACE"))
        {
            var data = input.Substring(6).Split(',');

            if (data.Length < 3)
            {
                Console.WriteLine("Invalid PLACE command. Usage: PLACE X,Y,F");
                Console.WriteLine();
                return robot;
            }

            var DIRECTION = data[2];
            var isValidX = int.TryParse(data[0], out int newX);
            var isValidY = int.TryParse(data[1], out int newY);
            var isValidDir = IsValidDirection(data[2]);

            if (isValidX && isValidY && isValidDir)
            {
                if (IsValidPosition(newX, newY))
                {
                    robot.X = newX;
                    robot.Y = newY;
                    robot.DIRECTION = DIRECTION;
                    robot.PLACED = true;
                }
                else
                {
                    Console.WriteLine("Invalid position. Position must be within 5x5 table. Start in zero");
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("Invalid PLACE command. Usage: PLACE X,Y,F");
                Console.WriteLine();
            }
        }
        else if (robot.PLACED)
        {
            switch (input)
            {
                case "MOVE":
                    var move = Move(robot);
                    if (move.Valid)
                    {
                        robot.X = move.Location.X;
                        robot.Y = move.Location.Y;
                    }
                    else
                    {
                        Console.WriteLine(move.Message);
                        Console.WriteLine();
                    }
                    break;
                case "LEFT":
                    robot.DIRECTION = RotateToLeft(robot.DIRECTION);
                    break;
                case "RIGHT":
                    robot.DIRECTION = RotateToRight(robot.DIRECTION);
                    break;
                case "REPORT":
                    Console.WriteLine($"Robot is at {robot.X},{robot.Y} facing {robot.DIRECTION}");
                    Console.WriteLine();
                    break;
                default:
                    Console.WriteLine("Invalid command.");
                    Console.WriteLine();
                    break;
            }
        }
        else
        {
            Console.WriteLine("Robot has not been placed yet.");
            Console.WriteLine();
        }

        return robot;
    }

}