namespace Domain.Entity
{
    public class BuyProviderDetails
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string IdProduct { get; set; } = "";  
        public string IdBuy { get; set; } = "";
        public int AmountBuy { get; set; }
        public decimal ValueUni { get; set; } 
        public decimal SubTotal { get; set; }
    }
}