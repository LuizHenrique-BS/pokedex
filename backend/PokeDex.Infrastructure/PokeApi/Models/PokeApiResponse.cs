using System.Text.Json.Serialization;

namespace PokeDex.Infrastructure.PokeApi.Models
{
    public class PokeApiResponse
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("height")]
        public int Height { get; set; }

        [JsonPropertyName("weight")]
        public int Weight { get; set; }

        [JsonPropertyName("types")]
        public List<TypeEntry> Types { get; set; }

        [JsonPropertyName("stats")]
        public List<StatEntry> Stats { get; set; }

        [JsonPropertyName("sprites")]
        public SpriteInfo Sprites { get; set; }

        [JsonPropertyName("game_indices")]
        public List<GameIndexEntry> GameIndices { get; set; }
    }

    // Small classes to capture the nested structure of the API response
    // and to make it easier to deserialize the JSON response into C# objects
    public class TypeEntry
    {
        [JsonPropertyName("type")]
        public TypeDetail Type { get; set; }
    }

    public class TypeDetail 
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class StatEntry {
        [JsonPropertyName("base_stat")]
        public int BaseStat { get; set; }

        [JsonPropertyName("stat")]
        public StatDetail Stat { get; set; }
    }

    public class StatDetail 
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class SpriteInfo 
    {
        [JsonPropertyName("other")]
        public OtherSprites Other { get; set; }
    }

    public class OtherSprites {
        [JsonPropertyName("official-artwork")]
        public OfficialArtwork OfficialArtwork { get; set; }
    }

    public class OfficialArtwork
    {
        [JsonPropertyName("front_default")]
        public string FrontDefault { get; set; }
    }

    public class GameIndexEntry
    {
        [JsonPropertyName("version")]
        public VersionDetail Version { get; set; }
    }

    public class VersionDetail 
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
