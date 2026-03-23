
namespace PokeDex.Domain.Entities
{
    public class PokemonEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> Types { get; set; }
        public string ImageUrl { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }

        public string Description { get; set; }
        public List<string> Games { get; set; }
        public Dictionary<string, int> Stats { get; set; }
        public List<string> Moves { get; set; } = new();
        public List<string> AlternativeForms { get; set; } = new();
        public string Generation { get; set; } = string.Empty;
        public List<string> Weaknesses { get; set; } = new();
        public bool IsLegendary { get; set; }
        public bool IsMythical { get; set; }
        public bool IsBaby { get; set; }
    }
}
