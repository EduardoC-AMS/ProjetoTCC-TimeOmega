using Microsoft.EntityFrameworkCore;
using Domain.Entity;
namespace InfraData.Context

{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
        public DbSet <Category> Category {get; set;}
        public DbSet <Product> Product {get; set;}
        public DbSet <Admin> Admin {get; set;}
    }
}