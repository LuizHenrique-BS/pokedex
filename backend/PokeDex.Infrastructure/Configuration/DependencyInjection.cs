
using Microsoft.Extensions.DependencyInjection;
using PokeDex.Application.Interfaces;
using PokeDex.Application.Services;
using PokeDex.Domain.Interfaces;
using PokeDex.Infrastructure.PokeApi;

namespace PokeDex.Infrastructure.Configuration
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            // Setting the HttpClient provided
            services.AddHttpClient<IPokemonExternalService, PokeApiService>(client =>
            {
                client.BaseAddress = new Uri("https://pokeapi.co/api/v2/");
            });
            services.AddScoped<IPokemonAppService, PokemonAppService>();

            return services;
        }
    }
}
