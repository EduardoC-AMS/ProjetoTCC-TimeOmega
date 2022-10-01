namespace Domain.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        void Add(T entity); //Adicionar
        Task<IEnumerable<T>> GetAll(); //Listar todos
        void Update(T entity); //Alterar
        void Delete(T entity); //Deletar
        Task<T> GetById(string id); //Listar id
        Task<bool> SaveChangesAsync(); //Salvar
    }
}