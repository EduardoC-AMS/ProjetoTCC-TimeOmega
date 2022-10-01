namespace Domain.Entity
{
    public class Product
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public string IdCategory { get; set; } = "";
        // public url UrlImage { get; set; } //Imagem do Produto
        public int  Amount { get; set; }
        public  decimal Price {get; set;} 
    }
}