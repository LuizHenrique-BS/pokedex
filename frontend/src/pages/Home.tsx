import { useState, useEffect } from "react";
import { getPokemon } from "../services/api";
import { type PokemonData } from "../interfaces/Pokemon";
import { SearchBar } from "../components/SearchBar";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonExtraInfo } from "../components/PokemonExtraInfo";
import { PokemonCardSkeleton } from "../components/PokemonCardSkeleton";
import { ErrorState } from "../components/ErrorState";
import { PokemonGames } from "../components/PokemonGames";

export const Home = () => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorType, setErrorType] = useState<string | null>(null);

  const fetchData = async (name: string) => {
    setLoading(true);
    setErrorType(null);

    try {
      const data = await getPokemon(name);
      setPokemon(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorType(err.message); // Here it returns "POKEMON_NOT_FOUND", etc.
      } else setErrorType("An unexpected error occurred.");
      setPokemon(null);
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  useEffect(() => {
    fetchData("pikachu");
  }, []);

  return (
    <main className="flex flex-col items-center p-6 gap-8">
      <SearchBar onSearch={fetchData} loading={loading} />

      {/* 1. LOADING STATE */}
      {loading && <PokemonCardSkeleton />}

      {/* 2. ERROR STATE (Only shows if not loading) */}
      {!loading && errorType && (
        <>
          <p className="text-red-500 font-medium animate-bounce">Oops! Something went wrong</p>
          <ErrorState errorType={errorType} />
        </>
      )}

      {/* 3. SUCESS STATE */}
      {!loading && !errorType && pokemon && (
        <>
          <PokemonCard pokemon={pokemon} />
          <PokemonExtraInfo moves={pokemon.moves} alternativeForms={pokemon.alternativeForms} />
          <PokemonGames games={pokemon?.games} />
        </>
      )}
    </main>
  );
};
