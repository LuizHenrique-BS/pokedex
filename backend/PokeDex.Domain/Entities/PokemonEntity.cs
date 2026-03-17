
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

        // Add the States (HP, Attack...) later
        public string Description { get; set; }
        public List<string> Games { get; set; }
        public Dictionary<string, int> Stats { get; set; }
    }
}
