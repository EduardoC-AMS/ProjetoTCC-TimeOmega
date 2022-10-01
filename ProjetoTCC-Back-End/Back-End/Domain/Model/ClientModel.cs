namespace Domain.Model
{
    public class ClientModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Nome { get; set; } = "";
        public string CPF { get; set; } = "";
        public string Email { get; set; } = "";
        public string Senha {get;set;} = "";
        public string Telefone {get;set;} = "";
        public int IdPerfil {get;set;}       
    }
}