namespace Cadalzo.Testing;

using Cadalzo;

public class ToyHelperTests
{
    [TestCase("NORTH", true)]
    [TestCase("SOUTH", true)]
    [TestCase("EAST", true)]
    [TestCase("WEST", true)]
    [TestCase("INVALID", false)]
    public void IsValidDirection_ReturnsCorrectResult(string direction, bool expectedResult)
    {
        bool result = ToyHelper.IsValidDirection(direction);
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [TestCase(0, 0, true)]
    [TestCase(-1, 0, false)]
    [TestCase(0, -1, false)]
    [TestCase(5, 0, false)]
    [TestCase(0, 5, false)]
    public void IsValidPosition_ReturnsCorrectResult(int x, int y, bool expectedResult)
    {
        bool result = ToyHelper.IsValidPosition(x, y);
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [Test]
    public void Move_ValidMove_ReturnsValidResponse()
    {
        var robot = new ToyInfo { X = 0, Y = 0, DIRECTION = "NORTH" };
        var result = ToyHelper.Move(robot);
        Assert.That(result.Valid, Is.True);
        Assert.Multiple(() =>
        {
            Assert.That(result.Location.X, Is.EqualTo(0));
            Assert.That(result.Location.Y, Is.EqualTo(1));
        });
    }

    [Test]
    public void Move_InvalidMove_ReturnsInvalidResponse()
    {
        var robot = new ToyInfo { X = 0, Y = 4, DIRECTION = "NORTH" }; // Robot is at edge of table
        var result = ToyHelper.Move(robot);
        Assert.That(result.Valid, Is.False);
    }

    [TestCase("NORTH", "WEST")]
    [TestCase("WEST", "SOUTH")]
    [TestCase("SOUTH", "EAST")]
    [TestCase("EAST", "NORTH")]
    public void RotateToLeft_ValidDirection_ReturnsCorrectResult(string currentDirection, string expectedDirection)
    {
        string result = ToyHelper.RotateToLeft(currentDirection);
        Assert.That(result, Is.EqualTo(expectedDirection));
    }

    [TestCase("NORTH", "EAST")]
    [TestCase("EAST", "SOUTH")]
    [TestCase("SOUTH", "WEST")]
    [TestCase("WEST", "NORTH")]
    public void RotateToRight_ValidDirection_ReturnsCorrectResult(string currentDirection, string expectedDirection)
    {
        string result = ToyHelper.RotateToRight(currentDirection);
        Assert.That(result, Is.EqualTo(expectedDirection));
    }
}

public class ExecuteCommandTests
{
    [Test]
    public void ExecuteCommand_ValidPlaceCommand_RobotPlacedCorrectly()
    {
        var robot = new ToyInfo();
        var input = "PLACE 0,0,NORTH";
        robot = ToyHelper.ExecuteCommand(robot, input);

        Assert.That(robot.PLACED, Is.True);
        Assert.Multiple(() =>
        {
            Assert.That(robot.X, Is.EqualTo(0));
            Assert.That(robot.Y, Is.EqualTo(0));
            Assert.That(robot.DIRECTION, Is.EqualTo("NORTH"));
        });
    }

    [Test]
    public void ExecuteCommand_InvalidPlaceCommand_RobotNotPlaced()
    {
        var robot = new ToyInfo();
        var input = "PLACE 0,0";
        ToyHelper.ExecuteCommand(robot, input);

        Assert.That(robot.PLACED, Is.False);
    }

    [Test]
    public void ExecuteCommand_Example1_Output()
    {
        var robot = new ToyInfo();

        robot = ToyHelper.ExecuteCommand(robot, "PLACE 0,0,NORTH");

        Assert.That(robot.PLACED, Is.True);
        Assert.Multiple(() =>
        {
            Assert.That(robot.X, Is.EqualTo(0));
            Assert.That(robot.Y, Is.EqualTo(0));
            Assert.That(robot.DIRECTION, Is.EqualTo("NORTH"));
        });

        robot = ToyHelper.ExecuteCommand(robot, "MOVE");
        robot = ToyHelper.ExecuteCommand(robot, "REPORT");
    }

    [Test]
    public void ExecuteCommand_Example2_Output()
    {
        var robot = new ToyInfo();

        robot = ToyHelper.ExecuteCommand(robot, "PLACE 0,0,NORTH");
        robot = ToyHelper.ExecuteCommand(robot, "LEFT");

        ToyHelper.ExecuteCommand(robot, "REPORT");
    }

    [Test]
    public void ExecuteCommand_Example3_Output()
    {
        var robot = new ToyInfo();

        robot = ToyHelper.ExecuteCommand(robot, "PLACE 1,2,EAST");
        robot = ToyHelper.ExecuteCommand(robot, "MOVE");
        robot = ToyHelper.ExecuteCommand(robot, "MOVE");
        robot = ToyHelper.ExecuteCommand(robot, "LEFT");
        robot = ToyHelper.ExecuteCommand(robot, "MOVE");

        ToyHelper.ExecuteCommand(robot, "REPORT");
    }
}