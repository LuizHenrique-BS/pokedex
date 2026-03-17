import { useEffect, useState } from 'react'
import { getPokemon, type PokemonData } from './services/api'

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [search, setSearch] = useState('pikachu');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const data = await getPokemon(search.toLowerCase());
      setPokemon(data);
    } catch (err) {
      if (err)
      setError('Pokémon não encontrado ou erro na API.');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch({ preventDefault: () => {} } as React.FormEvent);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 gap-8">
      {/* Formulário de Busca */}
      <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o nome do Pokémon..."
          className="flex-1 p-3 rounded-lg border border-(--border) bg-(--bg) text-(--text-h) focus:outline-none focus:ring-2 focus:ring-(--accent)"
        />
        <button 
          type="submit"
          className="bg-(--accent) text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '...' : 'Buscar'}
        </button>
      </form>

      {/* Mensagem de Erro */}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {/* Card do Pokémon */}
      {pokemon && (
        <main className="w-full max-w-2xl bg-(--bg) border border-(--border) rounded-3xl p-8 shadow-(--shadow) flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center">
            <img 
              src={pokemon.imageUrl} 
              alt={pokemon.name} 
              className="w-64 h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform"
            />
            <h2 className="text-4xl mt-4 capitalize">{pokemon.name}</h2>
            <div className="flex gap-2 justify-center mt-2">
              {pokemon.types.map(t => (
                <span key={t} className="px-4 py-1 rounded-full bg-(--accent-bg) text-(--accent) border border-(--accent-border) text-sm font-bold uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 text-left">
            <p className="text-lg leading-relaxed italic text-(--text)">"{pokemon.description}"</p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-(--border) pt-4">
              <div>
                <p className="text-xs uppercase text-(--text) font-bold">Altura</p>
                <p className="text-xl text-(--text-h)">{pokemon.height} m</p>
              </div>
              <div>
                <p className="text-xs uppercase text-(--text) font-bold">Peso</p>
                <p className="text-xl text-(--text-h)">{pokemon.weight} kg</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App;