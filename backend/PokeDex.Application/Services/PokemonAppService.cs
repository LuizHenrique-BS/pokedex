
using PokeDex.Application.DTOs;
using PokeDex.Application.Interfaces;
using PokeDex.Domain.Interfaces;

namespace PokeDex.Application.Services
{
    public class PokemonAppService : IPokemonAppService
    {
        private readonly IPokemonExternalService _externalService;

        public PokemonAppService(IPokemonExternalService externalService)
        {
            _externalService = externalService;
        }

        public async Task<PokemonDto?> GetPokemonDetailsAsync(string name)
        {
            var entity = await _externalService.GetPokemonAsync(name);

            if (entity == null) return null;

            return new PokemonDto
            {
                Id = entity.Id,
                Name = char.ToUpper(entity.Name[0]) + entity.Name.Substring(1), // Capitalize first letter
                Types = entity.Types,
                ImageUrl = entity.ImageUrl,
                Height = entity.Height / 10.0, // Convert decimeters to meters
                Weight = entity.Weight / 10.0, // Convert hectograms to kilograms
                Description = entity.Description.Replace("\n", " ").Replace("\f", " "), // Clean up newlines and form feeds
                Games = entity.Games,
                Stats = entity.Stats,
                Moves = entity.Moves,
                AlternativeForms = entity.AlternativeForms
            };
        }
    }
}
