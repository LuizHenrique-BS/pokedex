import { useEffect, useState } from "react";
import type { PokemonData } from "../interfaces/Pokemon";
import { getPokemon } from "../services/api";
import { SearchBar } from "../components/SearchBar";
import { PokemonCard } from "../components/PokemonCard";


export const Home = () => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (name: string) => {
    setLoading(true);
    setError(null);
    try{
      const data = await getPokemon(name);
      setPokemon(data);
    } catch (err){
      setError("Pokémon not found. Please try another one.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchData('pikachu');}, []);

  return (
    <main
      className="flex flex-col items-center p-6 gap-8"
    >
      <SearchBar onSearch={fetchData} loading={loading} />
      {error && <p className="text-red-500">{error}</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </main>
  )
}