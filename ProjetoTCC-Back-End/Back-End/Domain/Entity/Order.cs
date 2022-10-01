namespace Domain.Entity
{
    public class Order
    {
      public string Id { get; set; } = Guid.NewGuid().ToString();
      public DateTime Date { get; set; } 
      public string IdPayment { get; set; } = ""; 
      public string IdClient { get; set; } = ""; 
    }
}