namespace Domain.Model
{
    public class BuyProviderModel
    {
      public string Id { get; set; } = Guid.NewGuid().ToString();
      public string IdProduct { get; set; } = "";
      public string IdProvider { get; set; } = "";
      public decimal PriceTotal { get; set; } 
      public DateTime Date { get; set; } 
    }
}