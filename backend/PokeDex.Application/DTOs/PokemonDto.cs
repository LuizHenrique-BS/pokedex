
namespace PokeDex.Application.DTOs
{
    public class PokemonDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<string> Types { get; set; } = new();
        public string ImageUrl { get; set; } = string.Empty;
        public double Height { get; set; }
        public double Weight { get; set; }
        public string Description { get; set; } = string.Empty;
        public Dictionary<string, int> Stats { get; set; } = new();
        public List<string> Games { get; set; } = new();
        public List<string> Moves { get; set; } = new();
        public List<string> AlternativeForms { get; set; } = new();
        public string Generation { get; set; } = string.Empty;
        public List<string> Weaknesses { get; set; } = new();
    }
}
