import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/api";
import { SearchBar } from "../components/SearchBar";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonExtraInfo } from "../components/PokemonExtraInfo";
import { PokemonCardSkeleton } from "../components/PokemonCardSkeleton";
import { ErrorState } from "../components/ErrorState";
import { PokemonGames } from "../components/PokemonGames";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("pikachu");

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["pokemon", searchTerm],
    queryFn: () => getPokemon(searchTerm),
    retry: false,
    refetchOnWindowFocus: false,
  });

  // Display the loading indicator if the page is loading for the first time or if it is searching for a new term
  const showLoading = isLoading || isFetching;

  return (
    <main className="flex flex-col items-center p-6 gap-8">
      <SearchBar onSearch={setSearchTerm} loading={showLoading} />

      {/* 1. LOADING STATE */}
      {showLoading && <PokemonCardSkeleton />}

      {/* 2. ERROR STATE (Only shows if not loading) */}
      {!showLoading && isError && (
        <>
          <p className="text-red-500 font-medium animate-bounce">Oops! Something went wrong</p>
          <ErrorState errorType={error instanceof Error ? error.message : "An unexpected error occurred."} />
        </>
      )}

      {/* 3. SUCCESS STATE */}
      {!showLoading && !isError && pokemon && (
        <>
          <PokemonCard pokemon={pokemon} />
          <PokemonExtraInfo 
            moves={pokemon.moves} 
            alternativeForms={pokemon.alternativeForms} 
            onFormSelect={setSearchTerm}
          />
          <PokemonGames games={pokemon?.games} />
        </>
      )}
    </main>
  );
};
