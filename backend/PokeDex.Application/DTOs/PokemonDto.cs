
namespace PokeDex.Application.DTOs
{
    public class PokemonDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> Types { get; set; }
        public string ImageUrl { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public string Description { get; set; }
        public List<string> Games { get; set; }
        public Dictionary<string, int> Stats { get; set; }
    }
}
