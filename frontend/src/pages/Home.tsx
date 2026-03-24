import { useState, useRef, useEffect } from "react";
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
  const [isAltFormSelected, setIsAltFormSelected] = useState(false);
  const pokemonCardRef = useRef<HTMLDivElement>(null);

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

  const handleSearch = (term: string) => {
    setIsAltFormSelected(false); // Reset if it's a new manual search
    setSearchTerm(term);
  };

  // Display the loading indicator if the page is loading for the first time or if it is searching for a new term
  const showLoading = isLoading || isFetching;

  // Focus and scroll to the pokemon card when data is loaded
  useEffect(() => {
    if (pokemon && !showLoading && isAltFormSelected) {
      const timeoutId = setTimeout(() => {
        pokemonCardRef.current?.focus();
        pokemonCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        setIsAltFormSelected(false); // Reset after focusing/scrolling
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pokemon, showLoading, isAltFormSelected]);

  return (
    <main className="flex flex-col items-center p-6 gap-8">
      <SearchBar onSearch={handleSearch} loading={showLoading} />

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
          <PokemonCard ref={pokemonCardRef} pokemon={pokemon} />
          <PokemonExtraInfo 
            moves={pokemon.moves} 
            alternativeForms={pokemon.alternativeForms} 
            onFormSelect={setSearchTerm}
            onAlternativeFormClick={() => setIsAltFormSelected(true)}
          />
          <PokemonGames games={pokemon?.games} />
        </>
      )}
    </main>
  );
};
