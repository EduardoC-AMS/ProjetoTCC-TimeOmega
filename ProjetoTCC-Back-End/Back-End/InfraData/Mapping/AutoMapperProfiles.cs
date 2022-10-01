using AutoMapper;
using Domain.Entity;
using Domain.Model;

namespace InfraData.Mapping
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
           CreateMap<Category, CategoryModel>().ReverseMap();

           CreateMap<Product, ProductModel>().ReverseMap();

           CreateMap<Admin, AdminModel>().ReverseMap();
        }
    }
}
