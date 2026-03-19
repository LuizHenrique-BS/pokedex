using System.Text.Json.Serialization;

namespace PokeDex.Infrastructure.PokeApi.Models
{
    public class PokeTypeResponse
    {
        [JsonPropertyName("damage_relations")]
        public DamageRelations DamageRelations { get; set; }
    }

    public class DamageRelations
    {
        [JsonPropertyName("double_damage_from")]
        public List<DamageTypeDetail> DoubleDamageFrom { get; set; } = new();

        [JsonPropertyName("half_damage_from")]
        public List<DamageTypeDetail> HalfDamageFrom { get; set; } = new();

        [JsonPropertyName("no_damage_from")]
        public List<DamageTypeDetail> NoDamageFrom { get; set; } = new();
    }

    public class DamageTypeDetail
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}