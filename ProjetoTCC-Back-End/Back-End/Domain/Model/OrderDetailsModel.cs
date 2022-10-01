namespace Domain.Model
{
    public class OrderDetailsModel
    {
        public string Id  { get; set; } = Guid.NewGuid().ToString();
        public string IdOrder { get; set; } = "";
        public string  IdProduct { get; set; } = "";
        public int AmountOrder { get; set; }
        public decimal ValueUni { get; set; }
        public decimal SubTotal { get; set; }
    }
}