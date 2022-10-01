namespace Domain.Model
{
    public class CategoryModel
    { 
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = "";
    }
}