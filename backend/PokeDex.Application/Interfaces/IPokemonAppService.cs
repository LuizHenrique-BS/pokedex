
using PokeDex.Application.DTOs;

namespace PokeDex.Application.Interfaces
{
    public interface IPokemonAppService
    {
        public Task<PokemonDto?> GetPokemonDetailsAsync(string name);
    }
}
