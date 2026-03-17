import type { PokemonData } from "../interfaces/Pokemon";
import { StatBar } from "./StatBar";

interface PokemonCardProps {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="w-full max-w-4xl bg-(--bg) border border-(--border) rounded-3xl p-6 md:p-10 shadow-(--shadow) flex flex-col md:flex-row gap-10 animate-in fade-in zoom-in duration-300">
      {/* Left: Image Section */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
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
            <p className="text-(--text) font-mono text-sm">
              #{pokemon.id.toString().padStart(3, "0")}
            </p>
          </div>

          {/* Badge Type */}
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-md bg-(--accent-bg) text-(--accent) border border-(--accent-border) text-[10px] font-black uppercase tracking-tighter"
              >
                {type}
              </span>
            ))}
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
};
