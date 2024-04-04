
using Cadalzo;

Console.WriteLine("---------------");
Console.WriteLine("Welcome to My Robot Simulation");
Console.WriteLine();
Console.WriteLine("F: NORTH, EAST, SOUTH, WEST");
Console.WriteLine();
Console.WriteLine("Command Usage");
Console.WriteLine("PLACE X,Y,F");
Console.WriteLine();

RobotPlayground();

void RobotPlayground()
{

    var Robot = new ToyInfo();
    bool running = true;

    while (running)
    {
        Console.Write("Enter command: ");

        var input = Console.ReadLine();

        if (input is not null && input.Length > 0)
        {
            Robot = ToyHelper.ExecuteCommand(Robot, input.Trim().ToUpper());
        }
        else
        {
            Console.WriteLine("Invalid Command");
            Console.WriteLine();
        }
    }
}
