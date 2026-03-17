using System.Net.Http.Json;
using PokeDex.Infrastructure.PokeApi.Models;
using PokeDex.Domain.Interfaces;
using PokeDex.Domain.Entities;

namespace PokeDex.Infrastructure.PokeApi
{
    public class PokeApiService : IPokemonExternalService
    {
        private readonly HttpClient _httpClient;
        public PokeApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<PokemonEntity?> GetPokemonAsync(string identifier)
        {
            try
            {
                // Request to PokeAPI to get the Pokémon data by name or id
                var pokeData = await _httpClient.GetFromJsonAsync<PokeApiResponse>($"pokemon/{identifier.ToLower()}");

                if (pokeData == null)
                {
                    Console.WriteLine($"No data found for Pokémon: {identifier}");
                    return null;
                }

                // Request to get the pokémon description and other species-related info
                var speciesData = await _httpClient.GetFromJsonAsync<PokeSpeciesResponse>($"pokemon-species/{identifier.ToLower()}");


                return new PokemonEntity
                {
                    Id = pokeData.Id,
                    Name = pokeData.Name,
                    Height = pokeData.Height,
                    Weight = pokeData.Weight,
                    ImageUrl = pokeData.Sprites.Other?.OfficialArtwork?.FrontDefault,
                    Types = pokeData.Types.Select(t => t.Type.Name).ToList(),

                    Stats = pokeData.Stats.ToDictionary(stat => stat.Stat.Name, stat => stat.BaseStat),

                    Games = pokeData.GameIndices.Select(game => game.Version.Name).ToList(),

                    Description = speciesData?.FlavorTextEntries
                        .FirstOrDefault(f => f.Language.Name == "en")?.FlavorText
                        ?? "No description available."
                };
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error fetching Pokémon data: {ex.Message}");
                return null;
            }
        }

        public async Task<object> GetPokemonListAsync(int limit, int offset)
        {
            // implement pagination
            return null;
        }
    }
}
