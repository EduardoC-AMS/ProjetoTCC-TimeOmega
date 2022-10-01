namespace Domain.Model
{
    public class PaymentModel
    {
      public string Id { get; set; } = Guid.NewGuid().ToString();
      public string Description {get; set;} = "";

    }
}