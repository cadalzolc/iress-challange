namespace Cadalzo;

public class ToyInfo
{
   public int X { get; set; } = 0;
   public int Y { get; set; } = 0;
   public string DIRECTION { get; set; } = "";
   public bool PLACED { get; set; } = false;
}

public class ToyLocation
{
   public int X { get; set; } = 0;
   public int Y { get; set; } = 0;
}

public class MoveResponse
{
   public bool Valid { get; set; } = false;
   public string Message { get; set; } = "";
   public ToyLocation Location { get; set; } = new ToyLocation();
}