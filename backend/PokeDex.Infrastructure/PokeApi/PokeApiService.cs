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

                var weaknesses = await GetWeaknessesAsync(pokeData.Types.Select(t => t.Type.Name).ToList());

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
                        ?? "No description available.",

                    Moves = pokeData.Moves.Take(10).Select(m => m.Move.Name).ToList(),

                    AlternativeForms = speciesData?.Varieties
                        .Where(v => !v.IsDefault)
                        .Select(v => v.Pokemon.Name)
                        .ToList() ?? new List<string>(),

                    Generation = speciesData?.Generation?.Name ?? "Unknown",
                    Weaknesses = weaknesses
                };
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error fetching Pokémon data: {ex.Message}");
                return null;
            }
        }

        private async Task<List<string>> GetWeaknessesAsync(List<string> types)
        {
            var damageMultipliers = new Dictionary<string, double>();

            foreach (var typeName in types)
            {
                var typeData = await _httpClient.GetFromJsonAsync<PokeTypeResponse>($"type/{typeName.ToLower()}");
                if (typeData == null) continue;

                // Double damage from
                foreach (var relation in typeData.DamageRelations.DoubleDamageFrom)
                {
                    damageMultipliers[relation.Name] = damageMultipliers.GetValueOrDefault(relation.Name, 1.0) * 2.0;
                }

                // Half damage from
                foreach (var relation in typeData.DamageRelations.HalfDamageFrom)
                {
                    damageMultipliers[relation.Name] = damageMultipliers.GetValueOrDefault(relation.Name, 1.0) * 0.5;
                }

                // No damage from
                foreach (var relation in typeData.DamageRelations.NoDamageFrom)
                {
                    damageMultipliers[relation.Name] = 0.0;
                }
            }

            return damageMultipliers
                .Where(kvp => kvp.Value > 1.0)
                .Select(kvp => kvp.Key)
                .ToList();
        }

        public async Task<object> GetPokemonListAsync(int limit, int offset)
        {
            // implement pagination
            return null;
        }
    }
}
