
using System.Text.Json.Serialization;

namespace PokeDex.Infrastructure.PokeApi.Models
{
    public class PokeSpeciesResponse
    {
        [JsonPropertyName("flavor_text_entries")]
        public List<FlavorTextEntry> FlavorTextEntries { get; set; }

        [JsonPropertyName("varieties")]
        public List<VarietyEntry> Varieties { get; set; }

        [JsonPropertyName("generation")]
        public GenerationDetail Generation { get; set; }

        [JsonPropertyName("is_legendary")]
        public bool IsLegendary { get; set; }

        [JsonPropertyName("is_mythical")]
        public bool IsMythical { get; set; }

        [JsonPropertyName("is_baby")]
        public bool IsBaby { get; set; }
    }

    public class GenerationDetail
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class VarietyEntry
    {
        [JsonPropertyName("is_default")]
        public bool IsDefault { get; set; }

        [JsonPropertyName("pokemon")]
        public PokemonVariety Pokemon { get; set; }
    }

    public class PokemonVariety
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class FlavorTextEntry
    {
        [JsonPropertyName("flavor_text")]
        public string FlavorText { get; set; }

        [JsonPropertyName("language")]
        public LanguageDetail Language { get; set; }
    }

    public class LanguageDetail
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
