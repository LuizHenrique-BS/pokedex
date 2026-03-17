
using PokeDex.Domain.Entities;

namespace PokeDex.Domain.Interfaces
{
    public interface IPokemonExternalService
    {
        // search may be by name or by id
        Task<PokemonEntity> GetPokemonAsync(string identifier);
        // Se você quiser manter simples por enquanto:
        //Task<T> GetPokemonAsync<T>(string identifier);
        Task<object> GetPokemonListAsync(int limit, int offset);
    }
}
