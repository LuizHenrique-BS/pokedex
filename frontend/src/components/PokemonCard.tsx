import { forwardRef } from "react";
import type { PokemonData } from "../interfaces/Pokemon";
import { StatBar } from "./StatBar";
import { getTypeStyles } from "../constants/typeColors";

interface PokemonCardProps {
  pokemon: PokemonData;
}

export const PokemonCard = forwardRef<HTMLDivElement, PokemonCardProps>(
  ({ pokemon }, ref) => {
    return (
      <div className="w-full max-w-4xl bg-(--bg) border border-(--border) rounded-3xl p-6 md:p-10 shadow-(--shadow) flex flex-col md:flex-row gap-10 animate-in fade-in zoom-in duration-300">
        {/* Left: Image Section */}
        <div 
          ref={ref}
          tabIndex={-1}
          aria-label={`Image of ${pokemon.name}`}
          className="flex-1 flex flex-col items-center justify-center min-h-[300px] relative focus:outline-none"
        >
          {/* Rarity Badges - Top Right of Image Section */}
          <div className="absolute top-0 right-0 flex flex-col gap-2 z-20">
            {pokemon.isLegendary && (
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-500 border border-amber-500/50 text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/10">
                Legendary
              </span>
            )}
            {pokemon.isMythical && (
              <span className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-500 border border-purple-500/50 text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-purple-500/10">
                Mythical
              </span>
            )}
            {pokemon.isBaby && (
              <span className="px-3 py-1 rounded-lg bg-pink-500/20 text-pink-500 border border-pink-500/50 text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-pink-500/10">
                Baby
              </span>
            )}
          </div>
          
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Background Glow */}
            <div className="absolute w-40 h-40 bg-(--accent) blur-[80px] opacity-20"></div>

            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              className="w-full max-w-[250px] aspect-square object-contain z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold capitalize">{pokemon.name}</h2>
              <div className="flex flex-col gap-4 items-center mt-1">
                <p className="text-(--text) font-mono text-sm">
                  #{pokemon.id.toString().padStart(3, "0")}
                </p>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-(--text) font-bold uppercase tracking-widest">
                  {pokemon.generation}
                </span>
              </div>
            </div>

            {/* Badge Type */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-2">
                {pokemon.types.map((type) => {
                  const styles = getTypeStyles(type);
                  return (
                    <span
                      key={type}
                      style={{ 
                        backgroundColor: styles.bg, 
                        color: styles.text, 
                        borderColor: styles.border 
                      }}
                      className="px-3 py-1 rounded-md border text-[10px] font-black uppercase tracking-tighter"
                    >
                      {type}
                    </span>
                  );
                })}
              </div>

            </div>
          </div>
        
          {/* Weakness Badges */}
          <div className="flex flex-col items-center border-t border-(--border) pt-4 gap-1">
            <span className="text-[10px] uppercase font-black text-(--text) tracking-widest">
              Weaknesses
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              {pokemon.weaknesses.map((type) => {
                const styles = getTypeStyles(type);
                return (
                  <span
                    key={type}
                    style={{ 
                      backgroundColor: styles.bg, 
                      color: styles.text, 
                      borderColor: styles.border 
                    }}
                    className="px-3 py-1 rounded-md border text-[10px] font-black uppercase tracking-tighter"
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="border-t border-(--border) pt-4">
            <h3 className="text-[10px] uppercase font-black text-(--text) mb-2 tracking-widest">
              Description
            </h3>
            <p className="text-md leading-relaxed text-(--text-h) italic">
              "{pokemon.description}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-4 border-y border-(--border)">
            <div className="text-center md:text-left">
              <span className="block text-[10px] uppercase font-bold text-(--text)">Height</span>
              <span className="text-xl font-medium">{pokemon?.height} m</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[10px] uppercase font-bold text-(--text)">Weight</span>
              <span className="text-xl font-medium">{pokemon?.weight} kg</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase font-black text-(--text) mb-4 tracking-widest">
              Base Stats
            </h3>
            <StatBar
              label="HP"
              value={pokemon?.stats?.hp}
              colorClass={"bg-emerald-400"}
            />
            <StatBar
              label="Attack"
              value={pokemon?.stats?.attack}
              colorClass="bg-rose-500"
            />
            <StatBar
              label="Defense"
              value={pokemon?.stats?.defense}
              colorClass="bg-sky-500"
            />
            <StatBar
              label="Special Atk"
              value={pokemon?.stats?.["special-attack"]}
              colorClass="bg-amber-400"
            />
            <StatBar
              label="Special Def"
              value={pokemon?.stats?.["special-defense"]}
              colorClass="bg-indigo-500"
            />
            <StatBar
              label="Speed"
              value={pokemon?.stats?.speed}
              colorClass="bg-pink-500"
            />
          </div>
        </div>
        
      </div>
    );
  }
);

PokemonCard.displayName = "PokemonCard";
