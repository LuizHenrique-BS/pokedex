import { useState, useEffect } from 'react';
import { getPokemon } from '../services/api';
import { type PokemonData } from '../interfaces/Pokemon';
import { SearchBar } from '../components/SearchBar';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonCardSkeleton } from '../components/PokemonCardSkeleton';

export const Home = () => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (name: string) => {
    setLoading(true);
    setError(null);
    // Optional: keep the old pokemon on the screen or clear it
    // setPokemon(null); 

    try {
      const data = await getPokemon(name);
      setPokemon(data);
    } catch (err) {
      setError("Pokémon not found. Try another name!");
      setPokemon(null);
      console.error(err);
    } finally {
      // Small delay so the skeleton doesn't "flicker" too fast on local connections
      setTimeout(() => setLoading(false), 600);
    }
  };

  useEffect(() => {
    fetchData('pikachu');
  }, []);

  return (
    <main className="flex flex-col items-center p-6 gap-8">
      <SearchBar onSearch={fetchData} loading={loading} />
      
      {error && (
        <p className="text-red-500 font-medium animate-bounce">{error}</p>
      )}

      {/* If loading, show the skeleton */}
      {loading && <PokemonCardSkeleton />}

      {/* If finished loading and there is a pokemon, show the actual card */}
      {!loading && pokemon && <PokemonCard pokemon={pokemon} />}
    </main>
  );
};
