
using System.Text.Json.Serialization;

namespace PokeDex.Infrastructure.PokeApi.Models
{
    public class PokeSpeciesResponse
    {
        [JsonPropertyName("flavor_text_entries")]
        public List<FlavorTextEntry> FlavorTextEntries { get; set; }
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
