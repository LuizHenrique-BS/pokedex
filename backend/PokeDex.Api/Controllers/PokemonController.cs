using Microsoft.AspNetCore.Mvc;
using PokeDex.Domain.Interfaces;
using PokeDex.Domain.Entities;
using PokeDex.Application.Interfaces;

namespace PokeDex.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PokemonController : ControllerBase
    {
        //private readonly IPokemonExternalService _pokemonService;
        private readonly IPokemonAppService _pokemonService;

        public PokemonController(IPokemonAppService pokemonService)
        {
            _pokemonService = pokemonService;
        }
        [HttpGet("{name}")]
        public async Task<ActionResult<PokemonEntity>> Get(string name)
        {
            var pokemon = await _pokemonService.GetPokemonDetailsAsync(name);

            if (pokemon == null)
            {
                return NotFound(new { message = "Pokémon not found" });
            }

            return Ok(pokemon);
        }
    }
}
