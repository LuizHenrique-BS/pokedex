export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
}

export interface PokemonData {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
  height: number;
  weight: number;
  description: string;
  games: string[];
  stats: PokemonStats;
  moves: string[];
  alternativeForms: string[];
  generation: string;
  weaknesses: string[];
}