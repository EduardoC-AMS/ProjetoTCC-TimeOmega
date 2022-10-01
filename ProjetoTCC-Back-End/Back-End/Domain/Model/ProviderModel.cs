namespace Domain.Model
{
    public class ProviderModel
    {

        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = "";     
        public string Email { get; set; } = "";  
        public string Phone { get; set;} = ""; 
        public string CNPJ { get; set; } = "";              
    }
}