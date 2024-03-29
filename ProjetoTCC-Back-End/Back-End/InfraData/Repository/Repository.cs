using Domain.Interfaces;
using InfraData.Context;

namespace InfraData.Repository
{
    public class Repository<T> : IBaseRepository<T> where T : class
    {
        private readonly DataContext context;
        public Repository(DataContext context){
            this.context = context;
        }
        
        public void Add(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<T> GetById(string id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}